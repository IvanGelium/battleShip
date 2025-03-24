const board = require('./board')

test('sizes', () => {
  Math.floor(Math.random() * 10)
  const b = new board()
  expect(b.board[0][0].y).toBe(0)
})
