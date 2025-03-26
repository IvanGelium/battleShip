const Gameboard = require('./board')

class Player {
  constructor() {
    this.gameboard = new Gameboard()
  }
}

class Bot extends Player {
  constructor() {
    super(gameboard)
  }
}

module.exports = { Player, Bot }
