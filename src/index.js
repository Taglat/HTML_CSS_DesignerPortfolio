import './index.html';
import './index.scss';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav__list');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    })

    nav.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
		})
	})
}

const anchors = nav.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substring(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})