var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);


};

// Animações com Scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('exibir');
        } else {
            entry.target.classList.remove('exibir');
        }
    });
});

const cardsOcultos = document.querySelectorAll('.card');

cardsOcultos.forEach((el) => observer.observe(el));

// Animações com Scroll 2

const skillsOculto = document.querySelectorAll('.skills-card');

skillsOculto.forEach((el) => observer.observe(el));

const portfolioOculto = document.querySelectorAll('.portfolio-card');

portfolioOculto.forEach((el) => observer.observe(el));

// Função About

function abrirTela(nomeTela, elmnt) {
    
    var i, sobre, linkTela;

    about = document.getElementsByClassName("about");
    
    for (i = 0; i < about.length; i++) {

        about[i].style.display = "none";
    
    }

document.getElementById(nomeTela).style.display = "flex";

}

document.getElementById("abertoPadrao").click();

// Modal para tabela rotina
