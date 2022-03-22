import shelljs from 'shelljs'
import fs from 'fs'
import path from 'path'

const TARGET_DIR_NAME = 'node_modules'

function rmNodeModules(parentPath: string) {
  const res = fs.readdirSync(parentPath)
  res.forEach((item: string) => {
    const filePath = path.resolve(parentPath, item)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      if (item === TARGET_DIR_NAME) {
        shelljs.rm('-rf', filePath)
        console.log(`${filePath} 删除成功`)
      } else {
        rmNodeModules(filePath)
      }
    }
  })
}

module.exports = rmNodeModules