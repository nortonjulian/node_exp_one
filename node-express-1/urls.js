const fs = require('fs')
const axios = require('axios')
const { URL } = require('url')

fs.readFile('urls.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("ERROR:", err)
        process.kill(1)
    }


    const urls = data.trim().split('\n')

    const requests = urls.map(async (url) => {
        try {
            const response = await axios.get(url)
            const { hostname } = new URL(url)

            fs.writeFile(`${hostname}.txt`, response.data, (err) => {
                if (err) {
                console.error(`Errr writing to file ${hostname}.txt: ${err}`)
                } else {
                console.log(`Wrote to ${hostname}.txt`)
                }
            });
        } catch (error) {
            console.error(`Error downloading URL ${url}: ${err}`)
        }
    })

    Promise.all(requests)
    .then(() => {
        console.log('All URLs processed')
    })
    .catch((err) => {
        console.log('Error processing URLs:', err)
    })
})
