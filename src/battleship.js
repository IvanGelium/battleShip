class Battleship {
  hit() {
    this.hits += 1
    this.sunk = this.isSunk()
  }

  isSunk() {
    if (this.hits >= this.length) {
      return true
    }
    return false
  }
  constructor(length) {
    this.length = length
    this.hits = 0
    this.sunk = this.isSunk()
  }
}

module.exports = Battleship
