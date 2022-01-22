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

// Menu NavBar Responsivo
class MobileNavbar{
  constructor(mobileMenu, navList, navLinks){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active"; 

    this.handleClick = this.handleClick.bind();
  }

  handleClick(){
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent(){  
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if(this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav_link",
  ".nav_link li",
);
mobileNavbar.init();