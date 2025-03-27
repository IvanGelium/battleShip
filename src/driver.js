const Player = require('./player')
const Gameboard = require('./board')

function firstTurn() {
  switch (Math.random() >= 0.5) {
    case true:
      return 'bot'
      break
    case false:
      return 'player'
      break
  }
}

class Round {
  preBattle() {
    this.bot.board.rndPlace()
    this.player.board.rndPlace()
    console.log(this.bot.board.board)
  }
  constructor() {
    this.bot = { board: new Gameboard() }
    this.player = { board: new Gameboard() }
  }
}

module.exports = Round
