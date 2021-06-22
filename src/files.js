import fs from 'fs'
import { GitLog } from './gitlog.js'

export class HTMLFiles {

    constructor(htmldir) {
        this.HTML_DIR = htmldir
    }

    fileInfo (name) {
        const path = `${this.HTML_DIR}/${name}`
        return fs.statSync(path)
    }

    htmlFiles() {
        const files = fs.readdirSync(this.HTML_DIR)
        
        const htmls = files.filter(item => {
            return item.match(/.+\.html$/)
        })

        const gitlog = new GitLog()

        const fileinfos = htmls.map(async name => {
            const log = await gitlog.commits(name)
            return {
                name,
                info: this.fileInfo(name),
                log: await gitlog.logs(name)
            }
        })
        
        return Promise.all(fileinfos)
    }
}
