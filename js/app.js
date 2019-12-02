"use strict";
const section = document.querySelector("section");
const btn = document.querySelector("button");
const inputColor = document.querySelector("input[placeholder = \"Fono spalva\"]");
const inputFontSize = document.querySelector("input[placeholder = \"Teksto dydis\"]");
const inputFontColor = document.querySelector("input[placeholder = \"Teksto spalva\"]");

btn.addEventListener("click", keiskFona);

function keiskFona() {
    section.style.backgroundColor = inputColor.value;
    section.style.fontSize = inputFontSize.value + "px";
    section.style.color = inputFontColor.value;
}