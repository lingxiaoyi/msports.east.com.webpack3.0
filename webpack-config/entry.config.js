let path = require('path')
let dirlets = require('./base/dir-vars.config.js')
let pageArr = require('./base/page-entries.config.js')
let configEntry = {}

pageArr.forEach((page) => {
    configEntry[page] = path.resolve(dirlets.pagesDir, page + '/page')
})
configEntry['static/commons/ad.channel'] = path.resolve(dirlets.libsDir, 'ad.channel.js')
module.exports = configEntry
