const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const fs = require('fs')
const db = require('../database')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'public/uploads/avatars/');
  },

  // adds file extensions back on to files
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage })


router.post('/', upload.single('avatar'), (req, res) => {

  // req.file contains information of uploaded file

  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  }
  else if (!req.file) {
    return res.send('Please select an image to upload');
    // TODO: error review
  }
  // else if (err instanceof multer.MulterError) {
  //   console.log("Error 3")
  //     return res.send(err);
  // }
  // else if (err) {
  //   console.log("Error 4")
  //     return res.send(err);
  // }


  db.oneOrNone("SELECT avatar FROM users WHERE id = 1")
  .then((avatar) => {
    if (avatar) {
      const serverPath = './public/' + avatar.avatar
      fs.unlink(serverPath, (err) => {
        if (err) console.log(err)
      })
    }

    // removes "public" folder from path
    const publicPath = req.file.path.slice(7)

    db.none("UPDATE users SET avatar = $1 WHERE id = 1", publicPath) // TODO: current user
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      res.json(err)
      // TODO: error review
    })

  })
  .catch((err) => {
    res.json(err)
  })

  
})

module.exports = router