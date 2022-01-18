// Efeito Maquina de Escrever
function typeWriter(text) {
	const arrayText = text.innerHTML.split('')
	text.innerHTML = ''
	arrayText.forEach((letter, i) => {
		setTimeout(() => text.innerHTML += letter, 120 * i)
	})
}

typeWriter(document.querySelector('#typeWrite'))

// Cards Retratreis
let card = document.getElementsByClassName("card-retratil");
let i;

for (i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    this.classList.toggle("active")

    let resp = this.nextElementSibling
    if (resp.style.display === "block") {
      resp.style.display = "none"
    } else {
      resp.style.display = "block"
    }
  })
}