"use strict";
const section = document.querySelector("section");
const articles = document.querySelectorAll("article");
const btn = document.querySelector("button");
const inputColor = document.querySelector("input[placeholder = \"Fono spalva\"]");
const inputFontSize = document.querySelector("input[placeholder = \"Teksto dydis\"]");
const inputFontColor = document.querySelector("input[placeholder = \"Teksto spalva\"]");

console.log(section.style.backgroundColor);

btn.addEventListener("click", keiskArticle);

/*function keiskFona() {
    section.style.backgroundColor = inputColor.value;
    section.style.fontSize = inputFontSize.value + "px";
    section.style.color = inputFontColor.value;
}*/

function keiskArticle() {
    for(let article of articles) {
        article.style.backgroundColor = inputColor.value;
        article.style.fontSize = inputFontSize.value + "px";
        article.style.color = inputFontColor.value;
    }
}