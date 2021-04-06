const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const db = require('../database')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads/avatars/');
  },

  // adds file extensions back on to files
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage })


router.post('/', upload.single('avatar'), (req, res) => {
  console.log(req.file)

  // req.file contains information of uploaded file
  // req.body contains information of text fields, if there were any

  if (req.fileValidationError) {
    console.log("Error 1")
      return res.send(req.fileValidationError);
  }
  else if (!req.file) {
    console.log("Error 2")
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

  db.none("UPDATE users SET avatar = $1 WHERE id = 1", req.file.path)
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log("Error 5")
    res.json(err)
    // TODO: error review
  })
})

module.exports = router