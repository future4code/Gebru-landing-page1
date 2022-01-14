// Efeito Maquina de Escrever
function typeWriter(text) {
	const arrayText = text.innerHTML.split('')
	text.innerHTML = ''
	arrayText.forEach((letter, i) => {
		setTimeout(() => text.innerHTML += letter, 120 * i)
	})
}

typeWriter(document.querySelector('#typeWrite'))

// 