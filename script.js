const botaoabrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

botaoabrir.addventlistener("click", abrirMenu )
botaoFechar.addEventListener("click ", fecharmenu )

function abrirmenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharmenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}