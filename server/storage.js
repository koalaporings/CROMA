const multer = require('multer')
const path = require('path')
const storage = multer.memoryStorage()

const upload = multer({
    storage: storage
})

exports.uploadStorage = upload; 