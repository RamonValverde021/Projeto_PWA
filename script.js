const botao = document.getElementById("botao");
    botao.addEventListener("click", () => {
    alert("Você clicou no botão 🚀");
});

if (window.matchMedia('(display-mode: fullscreen)').matches ||
    window.matchMedia('(display-mode: standalone)').matches) {
  document.documentElement.style.backgroundColor = '#000000';
  document.body.style.backgroundColor = '#000000';
}
