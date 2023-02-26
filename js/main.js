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

const controle = document.querySelectorAll(".controle-ajuste")

console.log(controle)

const subtrair = document.getElementById("subtrair")
const somar = document.getElementById("somar")
const braco = document.getElementById("braco")

somar.addEventListener("click", ()=> { manipularDados("somar")})  

subtrair.addEventListener("click", ()=> { manipularDados("subtrair")})

function manipularDados(operacao) {
    if (operacao === "somar"){
        braco.value = parseInt(braco.value) + 1
    } else {
        braco.value = parseInt(braco.value) - 1
    }
}