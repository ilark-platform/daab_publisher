import { gitlogPromise } from 'gitlog'
import _ from 'lodash'

export class GitLog {
    
    async commits(options) {
        return await gitlogPromise(Object.assign({
            repo: './',
            fields: ['committerDate', 'authorDate'],
        }, options))
    }

    async logs(file) {
        const birthCommits = await this.commits({
            files: [file],
            status: ["A"]
        })

        const lastCommits = await this.commits({
            files: [file],
            status: ['M']
        })

        return {
            birth: _.head(birthCommits),
            last: _.tail(lastCommits)
        }
    }
}