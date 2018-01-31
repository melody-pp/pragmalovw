const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

const fileDir = path.resolve(__dirname, '../src')
const fontDir = path.resolve(__dirname, '../src/font')
const templatePath = path.resolve(__dirname, './template.html')

const getHtml = (fontPath, hanziStr) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style media="screen">
    /*声明 WebFont*/
    @font-face {
      font-family: 'fontfamily';
      src: url(${fontPath});
      font-weight: normal;
      font-style: normal;
    }

    /*使用选择器指定字体*/
    body {
      font-family: 'fontfamily';
    }
  </style>
</head>
<body>
${hanziStr}
</body>
</html>`

const getFilePathList = (dirPath, pathList, type = '') => {
  const files = fs.readdirSync(dirPath)

  files.forEach(fileName => {
    const stats = fs.statSync(path.join(dirPath, fileName))

    if (stats.isFile() && fileName.endsWith(type)) {
      pathList.push(path.join(dirPath, fileName))
    }

    if (stats.isDirectory()) {
      getFilePathList(path.join(dirPath, fileName), pathList, type)
    }
  })
}

const getFileHanzi = filePath => fs.readFileSync(filePath, 'utf-8').match(/[\u4e00-\u9fa5]/g)

const compressFont = (fontPath, hanziStr) => {
  const relativePath = path.relative(path.resolve(__dirname), fontPath).replace(/\\/g, '/')
  fs.writeFile(templatePath, getHtml(relativePath, hanziStr), err => {
    if (err) {
      return console.log(err)
    }

    exec('font-spider ' + templatePath, err => {
      console.log(err || `${fontPath.split('/').pop()}字体压缩完成!`)
    })
  })
}

const filePathList = []
const fontPathList = []
const AllHanzi = new Set()
let hanziStr = ''

getFilePathList(fileDir, filePathList, '.vue')
getFilePathList(fontDir, fontPathList)

filePathList.map(getFileHanzi).filter(hanziList => hanziList)
  .forEach(hanziList => hanziList.forEach(hanzi => AllHanzi.add(hanzi)))

hanziStr = Array.from(AllHanzi).join('')
fontPathList.forEach(fontPath => compressFont(fontPath, hanziStr))
