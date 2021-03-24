const fs = require('fs')
const gVotes = require('./votesDB.json')

module.exports = {
    query,
    save,
}

function query() {
    var votes = gVotes;
    console.log('votes is:', votes);
    return Promise.resolve(votes)
}

function save(color) {
    const idx = gVotes.colors.findIndex(currVote => currVote.id === color.id)
    gVotes.colors[idx] = color;
    _saveVotesToFile()
    return Promise.resolve(color)
}

function _saveVotesToFile() {
    fs.writeFileSync('./votesDB.json', JSON.stringify(gVotes, null, 2))
}
