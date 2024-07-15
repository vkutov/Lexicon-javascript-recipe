// 1. The logo text of the site has the wrong color. Change it to the correct one.
document.querySelector(".logo-text").style.color = "#384241";

// 2.The alignment of the elements inside the header element are wrong. Change it to the correct one.
document.querySelector("header").style.justifyContent = "left";

// 3.The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
document.querySelector("header").style.borderBottomColor = "lightgray";

//4. The recipe name is wrong, change it to the correct one.
document.querySelector("#recipe-name").innerText = "Frozen Cheesecake";

//5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
let clock = document.querySelector("span");
clock.classList.add("material-icons");

//6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
let timer = document.querySelector(".time");
timer.innerText = `60 + min`;

//7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
let img = document.querySelector("img");
img.src = "assets/frozen-cheesecake-slice.jpg";

//8. The background color of the ingredients list container is wrong. Fix it.
let bg = document.querySelector(".ingredients-container");
bg.style.backgroundColor = "white";

//9.  The ingredients are divided in to two parts, one for the bottom and one for the paste.
// In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
const ingredients = document.querySelector(".ingredients-list-bottom");
ingredients.innerHTML = "<li>15st digestivetex</li><li>Lite smör</li>";

// 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
const socker = document.querySelectorAll(".ingredients-list-paste li")[2];
socker.innerText = "3tsk vaniljsocke";
