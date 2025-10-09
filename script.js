const botao = document.getElementById("botao");
    botao.addEventListener("click", () => {
    alert("Você clicou no botão 🚀");
});

// Força o tema escuro no Chrome e Android
document.addEventListener("DOMContentLoaded", () => {
  let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  if (!metaColorScheme) {
    metaColorScheme = document.createElement("meta");
    metaColorScheme.name = "color-scheme";
    document.head.appendChild(metaColorScheme);
  }
  metaColorScheme.content = "dark light"; // 'dark' tem prioridade

  let metaTheme = document.querySelector('meta[name="theme-color"]');
  if (!metaTheme) {
    metaTheme = document.createElement("meta");
    metaTheme.name = "theme-color";
    document.head.appendChild(metaTheme);
  }
  metaTheme.content = "#000000";
});
