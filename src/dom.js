import { JSDOM } from 'jsdom'
import fs from 'fs'
import dayjs from 'dayjs'

export class FilesTable {

    constructor() {
        this.DOM = this.getDom()
        this.document = this.DOM.window.document
        this.table = this.document.querySelector('.list-index')
        this.tbody = this.table.querySelector('tbody')
    }
    
    getDom () {
        const template = fs.readFileSync('./template.html')
        return new JSDOM(template.toString())
    }

    td (content) {
        const td = this.document.createElement('td')
        if (content) {
            td.innerHTML = content
        }
        return td
    }

    createTable(htmlfiles) {
        htmlfiles.forEach(item => {
            const tr = this.document.createElement('tr')
            
            const filename = this.td()
            const anchor = this.document.createElement('a')
            const ver = (new Date()).getTime()
            anchor.innerHTML = item.name
            anchor.setAttribute('href', `./html/${item.name}?ver=${ver}`)
            filename.appendChild(anchor)

            const format = 'YYYY-MM-DD hh:mm'

            tr.appendChild(filename)

            //lastmodified
            tr.appendChild(this.td( dayjs(item.log.last.committerDate).format(format) ))
            
            // birth
            tr.appendChild(this.td( dayjs(item.log.birth.committerDate).format(format) ))

            this.tbody.appendChild(tr)
        })

        return this
    }

    writeTable() {
        return fs.writeFileSync(`./index.html`, this.DOM.serialize())
    }
}