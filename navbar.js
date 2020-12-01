const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.onclick = () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, i) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinksFade .5s ease forwards ${i / 7 + .3}s`;
            }
        })
        burger.classList.toggle('toggle-burger');
    };
}

const app = () => {
    navSlide();
}

app();

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}