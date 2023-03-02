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
console.log(controle)

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipularDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

// somar.addEventListener("click", ()=> { manipularDados("somar")})  

// subtrair.addEventListener("click", ()=> { manipularDados("subtrair")})

function manipularDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador")
    if (operacao === "+"){
        peca.value = parseInt(peca.value) + 1
    } else {
        peca.value = parseInt(peca.value) - 1
    }
}