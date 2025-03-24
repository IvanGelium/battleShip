class Battleship {
  hit() {
    this.hits += 1
    this.isSunk()
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true
      return
    }
    this.sunk = false
  }
  constructor(length) {
    this.length = length
    this.hits = 0
    this.sunk = this.isSunk()
  }
}

module.exports = Battleship
