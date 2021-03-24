const express = require('express')
const bodyParser = require('body-parser')

const votesService = require('./votesService')
const app = express()
const port = 3030

const cors = require('cors')
app.use(cors());

// Config the express App
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/api/vote', async (req, res) => {
    res.send(await votesService.query())
})

app.put('/api/vote/', (req, res) => {
    const vote = req.body
    votesService.save(vote)
        .then(savedVote => {
            res.send(savedVote)
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})