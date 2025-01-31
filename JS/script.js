// Facts Starts
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const increment = Math.ceil(target / 100);

                if (current < target) {
                    counter.innerText = current + increment;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const factsSection = document.querySelector('.facts-section');
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(factsSection);
});
// Facts End

// Chemicals Start
    function initSlider(sliderClass, cardClass, navClass) {
        const slider = document.querySelector(sliderClass); 
        const cards = slider.querySelectorAll(cardClass); 
        const navBtns = document.querySelectorAll(navClass);
        let currentIndex = 0;

        function moveSlide(index) {
            const cardWidth = cards[0].offsetWidth + 20; 
            slider.style.transform = `translateX(-${index * cardWidth}px)`;

            navBtns.forEach((btn, i) => {
                btn.classList.toggle('active', i === index);
            });

            currentIndex = index;
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex === 0) ? navBtns.length - 1 : currentIndex - 1;
            } else if (e.key === "ArrowRight") {
                currentIndex = (currentIndex === navBtns.length - 1) ? 0 : currentIndex + 1;
            }
            moveSlide(currentIndex);
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % navBtns.length;
            moveSlide(currentIndex);
        }, 3500);

        navBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                moveSlide(index);
            });
        });
    }

    initSlider('.fertilizer-cards', '.fertilizer-cards .card', '.f-navigation-buttons .nav-btn');
    initSlider('.pesticides-cards', '.pesticides-cards .card', '.p-navigation-buttons .nav-btn');
    initSlider('.seeds-cards', '.seeds-cards .card', '.s-navigation-buttons .nav-btn');
// Chemicals End

// Contacts Start
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            alert("Message sent successfully!");

            form.reset();
        });
    } else {
        console.error("Form element not found. Please check the form selector.");
    }
});

// Contacts End







