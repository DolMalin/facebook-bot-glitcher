const RandExp = require('randexp')
const imageToBase64 = require('image-to-base64')
const replaceString = require('replace-string')
const ReadableData = require('stream').Readable
const schedule = require('node-schedule')
const fs = require('fs')
require('dotenv').config()

const randexp = () => {
    return new RandExp(/[A-Za-z]/).gen() + new RandExp(/[A-Za-z]/).gen()
}

const glitchImage = (imageUrl) => {
    imageToBase64(imageUrl)
        .then( response =>{
            const encodedImage = replaceString(response,randexp(),randexp())
            const imageBuffer = Buffer.from(encodedImage, 'base64')
            let streamObj = new ReadableData()
            streamObj.push(imageBuffer)
            streamObj.push(null)
            streamObj.pipe(fs.createWriteStream(`${process.env.IMAGE_REPO}/img/micheal.jpg`))
        })
}

const generate = () => {
    schedule.scheduleJob('1 * * * * *', () => {
        glitchImage(process.env.IMAGE_URL)
    })
} 

module.exports = generate
