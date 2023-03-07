// const robotronDizendoOla = document.getElementById("robotron")

// robotronDizendoOla.addEventListener("click", ()=> {
//     console.log("Esse Olá foi feita pela função anônima.")
// })

// /*
// a função addEventListener sempre esperar receber 2 coisas.

// a primeira é o que ela vai fazer, qual operação.
// a segunda é 
// */

// function dizerOla(nome) {
//     console.log("Olá", nome)
// }

// dizerOla('Marcos')

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
console.log("Estatistica -> ", estatistica)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

console.log(controle)

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipularDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

// somar.addEventListener("click", ()=> { manipularDados("somar")})  

// subtrair.addEventListener("click", ()=> { manipularDados("subtrair")})

function manipularDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if (operacao === "+"){
        peca.value = parseInt(peca.value) + 1
    } else {
        peca.value = parseInt(peca.value) - 1
    }
}

function atualizaEstatisticas(peca) {
    // console.log(pecas[peca])

    estatistica.forEach( (elemento) => {
        console.log("Elemento -> ", elemento.dataset.estatistica)
        elemento.textContent =  parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}