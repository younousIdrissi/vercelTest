const express = require("express")
const router = express.Router()
const fs = require('fs')
const path = require('path')
const multer = require('multer')

const convertImageController = require('./../controllers/convertImageController')

const tempDir = path.join(__dirname, 'temp')

if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir)
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir)
    },
    fileame: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/imgtotext', upload.single('image'), convertImageController.imgToText)
router.get('/helloworld', (req, res) => {
    res.send('hello world')
})

module.exports = router