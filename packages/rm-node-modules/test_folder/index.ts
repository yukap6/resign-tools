import shelljs from 'shelljs'
import fs from 'fs'
import path from 'path'

const TARGET_DIR_NAME = 'node_modules'
const rootPath = path.resolve(__dirname)

const dirs: string[] = [
  path.join(rootPath, 'p', TARGET_DIR_NAME),
  path.join(rootPath, TARGET_DIR_NAME),
  path.join(rootPath, 't', TARGET_DIR_NAME, 'inner'),
];
shelljs.mkdir('-p', dirs)
shelljs.touch(dirs.map((item, index) => path.join(item, `a${index}.js`)))