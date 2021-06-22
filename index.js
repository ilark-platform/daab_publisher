import dayjs from 'dayjs'
import { FilesTable } from './src/dom.js'
import { HTMLFiles } from './src/files.js'

const HTML_DIR = './html'

const htmlfiles = await (new HTMLFiles(HTML_DIR)).htmlFiles()

const filesTable = new FilesTable()
filesTable.createTable(htmlfiles).writeTable()