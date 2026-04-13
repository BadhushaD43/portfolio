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

const contactForm = document.querySelector('#contact-form');
const contactEmail = document.querySelector('#contact-email');
const contactSubject = document.querySelector('#contact-subject');
const contactResult = document.querySelector('#contact-result');

if (contactForm && contactEmail && contactSubject && contactResult) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const accessKey = contactForm.querySelector('input[name="access_key"]');

        if (!accessKey.value || accessKey.value === 'YOUR_WEB3FORMS_ACCESS_KEY') {
            contactResult.textContent = 'Please add your Web3Forms access key first.';
            contactResult.classList.add('error');
            return;
        }

        if (!contactSubject.value.trim()) {
            contactSubject.value = 'New portfolio contact message';
        }

        contactResult.textContent = 'Sending message...';
        contactResult.classList.remove('error');

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: new FormData(contactForm),
                headers: {
                    Accept: 'application/json'
                }
            });
            const result = await response.json();

            if (result.success) {
                contactResult.textContent = 'Message sent successfully.';
                contactForm.reset();
            } else {
                contactResult.textContent = 'Message not sent. Please try again.';
                contactResult.classList.add('error');
            }
        } catch (error) {
            contactResult.textContent = 'Message not sent. Please check your connection.';
            contactResult.classList.add('error');
        }
    });
}
