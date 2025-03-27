const Gameboard = require('./board')

class Player {
  constructor() {
    this.gameboard = new Gameboard()
  }
}

module.exports = Player
