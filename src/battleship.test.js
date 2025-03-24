const Battleship = require('./battleship')
const battleship = require('./battleship')

test('hit', () => {
  const sh = new Battleship(4)
  for (let i = 0; i < 3; i++) {
    sh.hit()
  }
  expect(sh.hits).toBe(3)
})

test('sunk', () => {
  const sh = new Battleship(4)
  for (let i = 0; i < 5; i++) {
    sh.hit()
  }
  expect(sh.sunk).toBe(true)
})

test('notSunk', () => {
  const sh = new Battleship(4)
  for (let i = 0; i < 3; i++) {
    sh.hit()
  }
  expect(sh.sunk).toBe(false)
})
