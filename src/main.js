import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(
  "g[filter='url(#filter0_f_3_2547)'] path"
)
const ccBgColor02 = document.querySelector(
  "g[filter='url(#filter1_f_3_2547)'] path"
)

const ccIconBank = document.querySelector("img[alt='ícone do Banco']")
const ccBandeiraCartao = document.querySelector(
  "img[alt='ícone da Bandeira do Cartão']"
)
const cc = document.querySelector("section.cc")

function setCardType(type) {
  const colors = {
    visa: ["#01e24800", "#01e24800"],
    mastercard: ["#4A0577", "#7621AD"] /*mastercard: ["#C69347", "#DF6F29"], */,
    /*nubank: ["#4A0577", "#7621AD"],*/
    inter: ["#FF8900", "#FF8900"],
    default: ["#01e24800", "#01e24800"],
  }
  
  cc.classList.remove("nubank", "next", "inter")
  switch (type) {
    case "mastercard":
      cc.classList.add("nubank")
      ccBandeiraCartao.setAttribute("src", `mastercard-2.svg`)
      ccIconBank.setAttribute("src", "nubank.svg")
      ccBgColor01.setAttribute("fill", colors[type][0])
      ccBgColor02.setAttribute("fill", colors[type][1])
      break
    case "visa":
      cc.classList.add("next")
      ccBandeiraCartao.setAttribute("src", `cc-visa.svg`)
      ccIconBank.setAttribute("src", "next.svg")
      ccBgColor01.setAttribute("fill", colors[type][0])
      ccBgColor02.setAttribute("fill", colors[type][1])
      break
    case "inter":
      cc.classList.add("inter")
      ccBandeiraCartao.setAttribute("src", `mastercard-2.svg`)
      ccIconBank.setAttribute("src", "inter.svg")
      ccBgColor01.setAttribute("fill", colors[type][0])
      ccBgColor02.setAttribute("fill", colors[type][1])
      break
    default:
      cc.classList.remove("nubank")
      ccBandeiraCartao.setAttribute("src", `cc-default.svg`)
      ccIconBank.setAttribute("src", "cc-default.svg")
      ccBgColor01.setAttribute("fill", colors[type][0])
      ccBgColor02.setAttribute("fill", colors[type][1])
  }
}

const inputSecurityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}
const securityCodeMasked = IMask(inputSecurityCode, securityCodePattern)

const inputExpirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",

  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },

    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
}
const expirationDateMasked = IMask(inputExpirationDate, expirationDatePattern)

const inputCardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[6-9]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "inter",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "")
    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regex)
    })

    /*console.log(foundMask.cardtype)*/
    return foundMask
  },
}
const cardNumberMasked = IMask(inputCardNumber, cardNumberPattern)

globalThis.setCardType = setCardType

// É assim que faz para desativar o reload do boitão submit dentro de um formulário
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

const inputCardHolder = document.querySelector("#card-holder")
inputCardHolder.addEventListener("input", () => {
  const ccHolder = document.querySelector(".cc-holder .value")

  ccHolder.innerText =
    inputCardHolder.value.length === 0
      ? "FULANO DA SILVA"
      : inputCardHolder.value
})

securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value)
})
function updateSecurityCode(code) {
  const ccSecurity = document.querySelector(".cc-security .value")

  ccSecurity.innerText = code.length === 0 ? "123" : code
}

cardNumberMasked.on("accept", () => {
  const cardType = cardNumberMasked.masked.currentMask.cardtype
  setCardType(cardType)

  updateCardNumber(cardNumberMasked.value)
})
function updateCardNumber(number) {
  const ccNumber = document.querySelector(".cc-number")

  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number
}


expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value)
})
function updateExpirationDate(date) {
   const ccExpiration = document.querySelector(".cc-expiration .value")
   ccExpiration.innerText = date.length  === 0 ? "02/32" : date
}

const addButton = document.querySelector("#add-card")
addButton.addEventListener("click", () => {
 
    alert("Cartão Adicionado!")
})