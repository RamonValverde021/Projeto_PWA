const botao = document.getElementById("botao");
    botao.addEventListener("click", () => {
    alert("Você clicou no botão 🚀");
});

setTimeout(() => {
  let metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = "#000000";
}, 1000);

