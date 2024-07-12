/**
 * 1. What is the name of the recipe?
 */

let namn = document.querySelector("#recipe-name").innerHTML;
console.log(namn);

/**
 * 2. What HTML tag is used to display the Recipe name?
 */

console.log(`${document.querySelector("#recipe-name").tagName}`);

/**
 * 3. What is the font size of the paragraph tag with the class "description".
 */

let obj = document.querySelector(".description");
console.log(obj.style["font-size"]);
