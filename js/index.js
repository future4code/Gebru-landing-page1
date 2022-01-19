// Efeito Maquina de Escrever
function typeWriter(text) {
	const arrayText = text.innerHTML.split('')
	text.innerHTML = ''
	arrayText.forEach((letter, i) => {
		setTimeout(() => text.innerHTML += letter, 140 * i)
	})
}

typeWriter(document.querySelector('#typeWrite'))

// Cards Retratreis
let card = document.getElementsByClassName("card-retratil")

for (let i = 0; i < card.length; i++) {
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

// Scroll Lento
$('a[href^="#"]').on('click', function(e) {
  e.preventDefault()
  let id = $(this).attr('href')
  let = targetOffset = $(id).offset().top
      
  $('html, body').animate({ 
    scrollTop: targetOffset
  }, 500)
})