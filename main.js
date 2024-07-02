
let random = Math.floor(Math.random()*100)
let body = document.querySelector('body')
let text_1 = document.querySelector('.text_1')

text_1.innerHTML = random

text_1.style.color = "red"
body.style.background = "black"
text_1.style.fontSize = "72px"
text_1.style.textAlign = "center"
text_1.style.fontWeight = "1000"
text_1.style.marginTop = "300px"