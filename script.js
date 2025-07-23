document.addEventListener('DOMContentLoaded', () => {
    console.log('Script.js is running'); // Проверка, что файл вообще загружается

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Элемент должен быть виден на 10%
    };

    const observerCallback = (entries, observer) => {
        console.log('Observer callback called'); // Проверка, что функция вызывается

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is intersecting', entry.target);
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                console.log('Element is NOT intersecting', entry.target);
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Наблюдаем за всеми элементами, которые должны анимироваться при появлении
    const animatedElements = document.querySelectorAll('.section-animation, .discord-invite-animation, .feature-animation');
    animatedElements.forEach(element => {
        console.log('Observing element', element);
        observer.observe(element);
    });

    // --- Background Scroll Animation --- (УБРАНО)

    // --- Modal Window Functionality ---
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
    var closeModalBtn = document.querySelector(".close-modal");

    // Открываем модальное окно по клику на кнопке "Узнать больше"
    if (btn) { // Проверяем, что кнопка существует
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // Закрываем модальное окно по клику на крестик
    if (span) { // Проверяем, что крестик существует
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Закрываем модальное окно по клику на кнопке "Отмена / Назад"
    if (closeModalBtn) { // Проверяем, что кнопка существует
        closeModalBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Закрываем модальное окно по клику вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // --- Contact Modal Window Functionality ---
    var contactModal = document.getElementById("contactModal");
    var openContactModalBtn = document.getElementById("openContactModalBtn");
    var contactCloseSpan = (contactModal) ? contactModal.querySelector(".close") : null; // Убедитесь, что элемент найден
    var contactCloseModalBtn = (contactModal) ? contactModal.querySelector(".close-modal") : null; // Убедитесь, что элемент найден

    // Открываем модальное окно контактов по клику на кнопке "Связаться"
    if (openContactModalBtn) {
        openContactModalBtn.onclick = function() {
            contactModal.style.display = "block";
        }
    }

    // Закрываем модальное окно контактов по клику на крестик
    if (contactCloseSpan) {
        contactCloseSpan.onclick = function() {
            contactModal.style.display = "none";
        }
    }

    // Закрываем модальное окно контактов по клику на кнопке "Назад"
    if (contactCloseModalBtn) {
        contactCloseModalBtn.onclick = function() {
            contactModal.style.display = "none";
        }
    }

    // Закрываем модальное окно контактов по клику вне его
    window.onclick = function(event) {
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    }
});