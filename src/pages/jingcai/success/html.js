
const content = require('./content.ejs') // 调取存放本页面实际内容的模板文件
const layout = require('layout')
const pageTitle = '东方体育我的竞猜'
const pageKeywords = '东方体育'
const pageDescription = '成功参与了竞猜'
let canonical = `http://sports.eastday.com`
const hasLogo = false //判断有没有logo栏
module.exports = layout.init({
    pageTitle,
    pageKeywords,
    pageDescription,
    canonical,
    hasLogo,
}).run(content())
