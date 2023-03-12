const T = require('tesseract.js')
const fs = require('fs')


exports.imgToText = async (req, res, next) => {
    const imageFile = req.file
    const imageFilePath = imageFile.path
    let text = ''
    await T.recognize(imageFilePath, 'eng')
    .then(out => text = out.data.text)

    fs.unlinkSync(imageFilePath); 

    res.json({
        text: text
    })
}