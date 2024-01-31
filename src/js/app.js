
document.addEventListener("DOMContentLoaded", () => {

    createImages();
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

