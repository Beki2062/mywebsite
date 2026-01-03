let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'App Developer', 'Web Designer', 'YouTuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});
const socialLinks = document.querySelectorAll('.social-media a');

socialLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("User is visiting: " + link.href);
    });
});