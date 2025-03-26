const board = require('./board')

test('x', () => {
  const a = Math.floor(Math.random() * 10)
  const b = new board()
  expect(b.board[a][0].x).toBe(a)
})

test('y', () => {
  const b = new board()
  expect(b.board[0][1].contains).toBe('end')
})

test('shipSimpPlace', () => {
  const b = new board()
  b.shipPlacement(4, { x: 1, y: 1 }, 'x')
  expect(b.board[1][1].contains.ship).toEqual({
    hits: 0,
    length: 4,
    sunk: false,
  })
  expect(b.board[4][1].contains.ship).toEqual({
    hits: 0,
    length: 4,
    sunk: false,
  })
})

test('shipTheEndIsNigh', () => {
  const b = new board()
  b.shipPlacement(4, { x: 7, y: 7 }, 'x')
  expect(b.board[7][7].contains.ship).toBe(null)
})

test('ShipToShipAction', () => {
  const b = new board()
  b.shipPlacement(4, { x: 1, y: 1 }, 'x')
  b.shipPlacement(4, { x: 1, y: 2 }, 'x')
  expect(b.board[1][2].contains.ship).toBe(null)
})

test('hit', () => {
  const b = new board()
  b.shipPlacement(4, { x: 1, y: 1 }, 'x')
  b.takeHit({ x: 1, y: 1 })
  expect(b.board[1][1].contains.dmg).toBe(true)
  expect(b.board[1][1].contains.ship.hits).toBe(1)
})

test('sunk', () => {
  const b = new board()
  b.shipPlacement(2, { x: 1, y: 1 }, 'y')
  b.takeHit({ x: 1, y: 1 })
  b.takeHit({ x: 1, y: 2 })
  expect(b.board[1][1].contains.dmg).toBe(true)
  expect(b.board[1][2].contains.dmg).toBe(true)
  expect(b.board[1][1].contains.ship.sunk).toBe(true)
})

test('lose', () => {
  const b = new board()
  expect(b.isLose()).toBe(true)
})

test('Notlose', () => {
  const b = new board()
  b.shipPlacement(2, { x: 1, y: 1 }, 'y')
  expect(b.isLose()).toBe(false)
})
