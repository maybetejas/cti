const backGround = document.querySelector('.elipse');
const navBar = document.querySelector('.navbar');
const headContain = document.querySelector('.headcontain');
const page2 = document.querySelector('.page2');


const tl = new TimelineMax();

tl.fromTo(backGround, 1.5, { x: "-100%" }, { x: "0%",  ease: Power2.easeInOut })

.fromTo(navBar, 1, { opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.5")

.fromTo(headContain, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut});

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks  = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');


			navLinks.forEach((link, index) => {
		if(link.style.animation) {
			link.style.animation = ''
		}
		else{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
		}
	});

			burger.classList.toggle('toggle');

	});

}

	navSlide();  