
const cores = ["#292929", "#f2f2f2", "#c7c7c7"];
const botao = document.getElementById ("Troca");
const texto = document.getElementById ("cores");
document.body.style.backgroundColor = cores[0];
let index = 0;

botao.addEventListener("click", () => {
    index += 1;
    index = index%cores.length;
    let cor = cores[index];
    document.body.style.backgroundColor = cor;
    texto.textContent = "Background " + cor.toUpperCase();
});

