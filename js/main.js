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


const subtrair = document.getElementById("subtrair")
const somar = document.getElementById("somar")
const braco = document.getElementById("braco")
const controle = document.querySelectorAll(".controle-ajuste")
const parteDoRobo = document.querySelectorAll(".peca-titulo")

parteDoRobo.forEach((elemento) => {
   console.log(elemento.innerText)
})

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipularDados((evento.target.textContent))
    })
})

// somar.addEventListener("click", ()=> { manipularDados("somar")})  

// subtrair.addEventListener("click", ()=> { manipularDados("subtrair")})

function manipularDados(partedoRobo, operacao) {
    if (operacao === "+"){
        braco.value = parseInt(braco.value) + 1
    } else {
        braco.value = parseInt(braco.value) - 1
    }
}