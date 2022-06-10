const {readFile, writeFile} = require('node:fs').promises

const startFileMod = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/txt-result-fs-async.txt', `this is the written file: extracted first text: ${first} and second text: ${second}` )
    } catch (error) {
        console.log(error)
    }
}

startFileMod()