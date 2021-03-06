const urlencode = require('urlencode')
const curl = require('curlrequest')
const glitcher = require('./glitcher')
require('dotenv').config()
const shedule = require('node-shedule')
const { scheduleJob } = require('node-schedule')

const sendPost = () => {
    schedule.scheduleJob('*/30 * * * *', () => {
        let photo = urlencode(process.env.GLITCHED_IMAGE_URL)
        let optionImg = {
            url: `https://graph.facebook.com/${process.env.PAGE_ID}/photos?url=${photo}&access_token=${process.env.FACEBOOK_TOKEN}`,
            method:'POST'
        }
        curl.request(optionImg, (err, data) => {})
    })
}

glitcher()
sendPost()
