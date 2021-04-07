module.exports = {
    ifEquals: function(a, b, opts) {
        console.log(a + ' ' + b)
        if (a == b) {
            return opts.fn(this)
        }
        else {
            return opts.inverse(this)
        }
    }
}