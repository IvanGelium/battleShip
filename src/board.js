class Gameboard {
  boardBuilder() {
    let board = []
    for (let i = 0; i < 10; i++) {
      let row = []
      for (let k = 0; k < 10; k++) {
        row.push({ x: i, y: k })
      }
      board.push(row)
    }
    return board
  }
  constructor() {
    this.board = this.boardBuilder()
  }
}

module.exports = Gameboard
