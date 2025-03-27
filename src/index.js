import './index.css'

const Round = require('./driver')

const ngBtn = document.querySelector('#newGame')
ngBtn.addEventListener('click', () => {
  ngUi()
})
const midler = document.querySelector('.midler')

function ngUi() {
  clear(midler)
  const shipMenu = crWindow('shipMenu', midler)
  const locator = crWindow('locator', shipMenu)
  const arrow = crWindow('arrow', locator)
  const arrowHead = crWindow('arrowHead', arrow)
  const arrowTail = crWindow('arrowTail', arrow)
  const shipsPlace = crWindow('shipsPlace', shipMenu)
  const gamefield = crWindow('gamefield', midler)
  const nameField = crWindow('nameField', gamefield)
  const YouName = crWindow('nameField', nameField)
  YouName.textContent = 'YOU'
  const botName = crWindow('nameField', nameField)
  botName.textContent = 'BOT'
  const boardsContainer = crWindow('boardsContainer', gamefield)
  const boardPlayer = crWindow('board playerBoard', boardsContainer)
  const zeroMeridian = crWindow('zeroMeridian', boardsContainer)
  const boardBot = crWindow('board botBoard', boardsContainer)

  const round = new Round()
  round.preBattle()
  boardUi(boardPlayer, round.player)
  boardUi(boardBot, round.bot)

  //   return { boardsContainer, shipMenu }
}

function crWindow(cls, parent) {
  const window = document.createElement('div')
  window.className = cls
  parent.appendChild(window)
  return window
}

function clear(parent) {
  while (parent.firstElementChild !== null) {
    parent.firstElementChild.remove()
  }
}

function boardUi(boardContainer, player) {
  const grid = crWindow('grid', boardContainer)
  for (let i = 1; i < player.board.board.length; i++) {
    for (let k = 1; k < player.board.board[i].length; k++) {
      switch (player.board.board[i][k].contains.ship !== null) {
        case true:
          const a = crWindow('cellShip', grid)
          if (player.board.board[i][k].contains.dmg) {
            a.classList = 'cellShip dmg'
          }
          break
        case false:
          const b = crWindow('cellEmpty', grid)
          if (player.board.board[i][k].contains.dmg) {
            b.classList = 'cellEmpty dmg'
          }
          break
      }
    }
  }
}
