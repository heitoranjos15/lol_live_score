const gameId = async game => game.id
const gameNumber = async game => game.number

const state = async game => game.state


module.exports = {
    gameId,
    gameNumber,
    state
}
