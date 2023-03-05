// const cores = document.querySelectorAll("[cor]")
// console.log(cores)

// cores.forEach((elemento) => {
//     elemento
// })

const lista = document.querySelector("ul");
console.log(lista)

document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

console.log(document.querySelector("#botao"))

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

console.log(document.querySelector(".close"))