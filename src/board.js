const Battleship = require('./battleship')

class Gameboard {
  boardBuilder() {
    let board = []
    for (let i = 0; i < 11; i++) {
      let row = []
      for (let k = 0; k < 11; k++) {
        if (i == 0 || i == 11) {
          row.push({ x: i, y: k, contains: 'end' })
        } else {
          if (k == 0 || k == 11) {
            row.push({ x: i, y: k, contains: 'end' })
          } else {
            row.push({ x: i, y: k, contains: { ship: null, dmg: false } })
          }
        }
      }
      board.push(row)
    }
    return board
  }
  shipPlacement(size, coordObj, orientation) {
    let ship = new Battleship(size)
    if (coordObj.x + ship.length > 9 && orientation === 'x') {
      return undefined
    }
    if (coordObj.y + ship.length > 9 && orientation === 'y') {
      return undefined
    }
    if (!this.isAvialable(ship, coordObj, orientation)) {
      //Ошибка
      return undefined
    }

    switch (orientation) {
      case 'x':
        for (let i = 0; i < ship.length; i++) {
          this.board[coordObj.x + i][coordObj.y].contains.ship = ship
        }
        this.ships.push({ ship: ship, dmg: 'none' })
        break
      case 'y':
        for (let i = 0; i < ship.length; i++) {
          this.board[coordObj.x][coordObj.y + i].contains.ship = ship
        }
        this.ships.push(ship)
        break
    }
    console.log(ship)
  }

  isAvialable(ship, coordObj, orientation) {
    for (let i = 0; i < ship.length; i++) {
      for (let k = -1; k < 2; k++) {
        for (let j = -1; j < 2; j++) {
          switch (orientation) {
            case 'x':
              if (
                this.board[coordObj.x + k + i][coordObj.y + j].contains !==
                  'end' &&
                this.board[coordObj.x + k + i][coordObj.y + j].contains.ship !==
                  null
              ) {
                return false
              }
              break
            case 'y':
              if (
                this.board[coordObj.x + k][coordObj.y + j + i].contains !==
                  'end' &&
                this.board[coordObj.x + k][coordObj.y + j + i].contains.ship !==
                  null
              ) {
                return false
              }
              break
          }
        }
      }
    }

    return true
  }

  takeHit(coordObj) {
    if (this.board[coordObj.x][coordObj.y].contains.ship) {
      this.board[coordObj.x][coordObj.y].contains.ship.hit()
    }
    this.board[coordObj.x][coordObj.y].contains.dmg = true
  }

  isLose() {
    if (this.ships.length <= 0) {
      return true
    }
    let newShips = []
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].sunk) {
        return false
      }
    }
    return true
  }

  rndPlace() {
    let left = [5, 4, 3, 3, 2]
    let c = 0
    while (left.length > 0 && c < 5) {
      const a = this.ships.length
      while (this.ships.length === a) {
        const obj = {
          x: Math.ceil(Math.random() * 9),
          y: Math.ceil(Math.random() * 9),
        }
        this.shipPlacement(
          left[left.length - 1],
          obj,
          Math.random() > 0.6 ? 'x' : 'y'
        )
      }
      c++
      left.pop()
    }
  }

  constructor() {
    this.board = this.boardBuilder()
    this.ships = []
  }
}

module.exports = Gameboard
