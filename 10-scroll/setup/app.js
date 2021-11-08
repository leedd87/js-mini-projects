// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// const date = document.getElementById('date');
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links'); //el height esta hardcodeado puede haber errores
    //esta siguiente opcion es para calcular la altura del contenedor mobile de manera dinamica (puedo agregar los li que se necesite)
    const containerHeight = linksContainer.getBoundingClientRect().height
    // console.log(containerHeight)
    const linksHeight = links.getBoundingClientRect().height
    // console.log(linksHeight)

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)

    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        console.log(id)
        const element = document.getElementById(id);
        //calcular las alturas para que los titulos quedenn debajo del navbar
        const navHeight = navBar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 85) {
            position = position + containerHeight;
        }

        console.log(position)
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    })
})

