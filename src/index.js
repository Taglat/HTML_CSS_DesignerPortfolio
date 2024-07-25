import { root } from 'postcss/lib/postcss';
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

const createSelectedSection = (root) => {
    root.querySelectorAll('.observe').forEach(s => {
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    nav.querySelectorAll('a').forEach(link => link.classList.remove('active'));
                    let id = entry.target.getAttribute('id');
                    nav.querySelector(`a[href="#${id}"]`).classList.add('active');
                }
            })
        }, {}).observe(s);
    })
}

createSelectedSection(document.querySelector('#page'))