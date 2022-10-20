<h1 align="center"> Explorer Lab #01 </h1>

<p align="center">
Evento exclusivo e gratuito, promovido pela Rocketseat para ensino de tecnologias WEB.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="rocketpay" src=".github/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript e JSON
- [Node e NPM](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [iMask](https://imask.js.org)

## 💻 Projeto

O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.

## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/file/gpqavL469k0pPUGOmAQEM9/Explorer-Lab-%2301/duplicate). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## 📖 O que eu aprendi

Eu aprendi o que são os eventos em JS, basicamente seria qualquer interação do usuário com algum elemento da página, e também como executar uma função de acordo com um evento.

```
const expirationDateMasked = IMask(inputExpirationDate, expirationDatePattern)
expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value)
})

function updateExpirationDate(date) {
   const ccExpiration = document.querySelector(".cc-expiration .value")
   ccExpiration.innerText = date.length  === 0 ? "02/32" : date
}
```
O expirationDateMasked é uma variável que contem a função IMask(que que recebe como argumento o valor do input e da mascara), e o "accept" é o nome do evento, e significa que quando o usuário preencher o campo, e esse valor for válido, o evento vai executar a função updateExpirationDate() que recebe como argumento "expirationDateMasked.value" o valor que o usuário digitou.

A função updateExpirationDate() basicamente vai atualizar o elemento html, onde irá trocar o valor padrão pelo valor digitado pelo usuário.

## :memo: Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discord.gg/rocketseat)
