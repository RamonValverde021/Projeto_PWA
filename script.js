const botao = document.getElementById("botao");
    botao.addEventListener("click", () => {
    alert("Você clicou no botão 🚀");
});

const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkMode) {
  document.documentElement.classList.add('modo-escuro');
} else {
  document.documentElement.classList.add('modo-escuro');
}
