
document.addEventListener("DOMContentLoaded", () => {

    createImages();
    mobileMenuSlide();
});

function createImages () {

    const ulImage = document.querySelector(".tech-images");
    const languageNames = ["html", "css", "javascript", "sass", "java", "php", "mysql"];

    for (let i = 0; i <= languageNames.length - 1; i++) {
        
        const image = document.createElement("li");

        image.innerHTML = `
        <img loading="lazy" width="100" height="100" src="build/img/${languageNames[i]}.svg" alt="${languageNames[i]}">
        `

        ulImage.appendChild(image);
    }    
}

if (window.matchMedia("(min-width: 360px)").matches && window.matchMedia("(max-width: 768px)").matches ) {

    function mobileMenuSlide () {
        const mobileMenu = document.querySelector(".mobile-menu");
        const mobileMenuById = document.getElementById("mobile-menu");
        const body = document.body;
    
        mobileMenu.addEventListener("click", () => {
            const mobileSlide = document.getElementById("mobile-menu-slide");
            if (mobileSlide.style.display === "none") {
                mobileMenuById.src = "build/img/close-line.svg";
                mobileSlide.style.display = "block";
                body.style.overflow = "hidden";
            } else {
                mobileMenuById.src = "build/img/align-justify.svg";
                mobileSlide.style.display = "none";
                body.style.overflow = "auto";
            }
        });

        // Obtén todos los enlaces del menú
        const menuLinks = document.querySelectorAll(".mobile-menu-slide-link");

        // Agrega un evento a cada enlace para cerrar el menú al hacer clic
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                const mobileSlide = document.getElementById("mobile-menu-slide");
                mobileMenuById.src = "build/img/align-justify.svg";
                mobileSlide.style.display = "none";
                body.style.overflow = "auto";
            });
        });

        // const profileImage = document.querySelector(".profile-picture");

        // profileImage.addEventListener("click", () => {
        //     const mobileSlide = document.getElementById("mobile-menu-slide");
        //     mobileMenuById.src = "build/img/align-justify.svg";
        //     mobileSlide.style.display = "none";
        //     body.style.overflow = "auto";
        // });
    }
} else {
    mobileSlide.style.display = "none";
}

