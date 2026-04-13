// nav bar toggle

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//scroll section active

let section =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top>= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    
// sticky navbar

let header =document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);

// removing icon nav

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// Contact web
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.querySelector('#contact-name').value.trim();
        const email = document.querySelector('#contact-email').value.trim();
        const phone = document.querySelector('#contact-phone').value.trim();
        const subject = document.querySelector('#contact-subject').value.trim() || 'Portfolio contact message';
        const message = document.querySelector('#contact-message').value.trim();

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Mobile: ${phone}`,
            '',
            'Message:',
            message
        ].join('\n');

        window.location.href = `mailto:badhushad0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        contactForm.reset();
    });
}
