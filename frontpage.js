const typingPhrases = [
    "I'm FullStack Web Developer...",
    "I'm ReactJS Developer...",
    "I'm NodeJs Developer...",
    "I'm ExpressJs Developer...",
    "I'm MongoDB Developer.",
    "I'm SQL Developer",
];

const typingElement = document.querySelector(".typing");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";

function type() {
    if (letterIndex < typingPhrases[phraseIndex].length) {
        currentPhrase += typingPhrases[phraseIndex][letterIndex];
        typingElement.textContent = currentPhrase;
        letterIndex++;
        setTimeout(type, 60);
    } else {
        setTimeout(erase, 800);
    }
}

function erase() {
    if (letterIndex > 0) {
        currentPhrase = currentPhrase.slice(0, -1);
        typingElement.textContent = currentPhrase;
        letterIndex--;
        setTimeout(erase, 20);
    } else {
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        setTimeout(type, 300);
    }
}

 // toggle menu/navbar script
 $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


setTimeout(type, 500);


 // JavaScript to trigger the fade-up effect when the section comes into view
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "12px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-up");
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });
    });