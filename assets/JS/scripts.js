//Smooth Scrolling
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Animación en el Scroll
// window.addEventListener('scroll', function() {
//     var reveals = document.querySelectorAll('.reveal');
//     for (var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;
//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add('visible');
//         } else {
//             reveals[i].classList.remove('visible');
//         }
//     }
// });

// efecto para las terjetas
// $(document).ready(function() {
//     $('#Nothofagus').hover(function() {
//         $(this).animate({ left: '30px' }, 'fast');
//     }, function() {
//         $(this).animate({ left: '0' }, 'fast');
//     });
// });

// $(document).ready(function() {
//     // Manejo del efecto hover con jQuery
//     $('#card').hover(
//         function() {
//             $(this).css('transform', 'translateX(60px)'); // Mueve la tarjeta 30px a la derecha
//         }, 
//         function() {
//             $(this).css('transform', 'translateX(0)'); // Vuelve la tarjeta a su posición original
//         }
//     );
// });

//Mostrar y Ocultar Contenido
// document.getElementById('toggle-info').addEventListener('click', function() {
//     var info = document.getElementById('extra-info');
//     if (info.style.display === 'none') {
//         info.style.display = 'block';
//         this.textContent = 'Ocultar información';
//     } else {
//         info.style.display = 'none';
//         this.textContent = 'Mostrar más información';
//     }
// });

//Toggle Dark Mode
// document.getElementBy ('toggle-dark-mode').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
//     document.querySelector('.navbar').classList.toggle('dark-mode');
//     document.querySelector('.section-agrandada').classList.toggle('dark-mode');
// });

//Validación de Formularios
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email');
    if (!email.checkValidity()) {
        event.preventDefault();
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
});

//Botón de Volver al Inicio
// var scrollTopBtn = document.getElementById('scroll-top-btn');
// window.addEventListener('scroll', function() {
//     if (window.scrollY > 300) {
//         scrollTopBtn.style.display = 'block';
//     } else {
//         scrollTopBtn.style.display = 'none';
//     }
// });
// scrollTopBtn.addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
