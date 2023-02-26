const robotronDizendoOla = document.getElementById("robotron")

robotronDizendoOla.addEventListener("click", ()=> {
    console.log("Esse Olá foi feita pela função anônima.")
})

/*
a função addEventListener sempre esperar receber 2 coisas.

a primeira é o que ela vai fazer, qual operação.
a segunda é 
*/

function dizerOla(nome) {
    console.log("Olá", nome)
}

dizerOla('Marcos')