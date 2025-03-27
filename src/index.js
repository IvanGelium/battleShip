import './index.css'

const ngBtn= document.querySelector("#newGame")
ngBtn.addEventListener("click", ()=> {ngUi()})
const midler = document.querySelector(".midler")

function ngUi () {
    clear(midler)
    const shipMenu = crWindow("shipMenu",midler)
    const gamefield = crWindow("gamefield",midler)
    const nameField = crWindow("nameField",gamefield)
    const YouName = crWindow("nameField",nameField)
    YouName.textContent = "YOU"
    const botName = crWindow("nameField",nameField)
    botName.textContent = "BOT"
    const boardsContainer = crWindow("boardsContainer",gamefield)
    const boardPlayer = crWindow("board playerBoard",boardsContainer)
    const zeroMeridian = crWindow("zeroMeridian",boardsContainer)
    const boardBot= crWindow("board botBoard",boardsContainer)

}

function crWindow(cls,parent) {
    const window = document.createElement("div")
    window.className = cls
    parent.appendChild(window)
    return window
}

function clear (parent) {
    while (parent.firstElementChild !== null) {
        parent.firstElementChild.remove()
    }
}