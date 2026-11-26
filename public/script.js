const botao = document.getElementById("btn-testar");
const resposta = document.getElementById("resposta");

botao.addEventListener("click", () => {
  const agora = new Date().toLocaleTimeString("pt-BR");
  resposta.textContent = `JavaScript executado com sucesso às ${agora}.`;
});
