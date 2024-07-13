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

//4.  What is the value of the alt atrribute on the image?
console.log(` ${document.querySelector(".image-container img").alt}`);

//5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console
// {
//   url: string
//   height: number,
//   width: number,
// }
let image = document.querySelector(".image-container img");
console.log("{");
console.log(`url: ${image.src},`);
console.log(`height: ${image.height},`);
console.log(`width: ${image.width},`);
console.log("}");

// 6.How many ingredients has the paste?
let ingredients = document.querySelector(".ingredients-list-paste");
console.log(`There are ${ingredients.childElementCount} ingredients in the paste`);

// 7. Which is the forth element in the list containing the ingredients for the paste?
console.log(ingredients.children[3].textContent);

// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
// {
//   order: number;
//   text: instruction;
// }

let instructionsArr = [];
const instructions = document.querySelectorAll(".instructions-list li");
instructions.forEach((key, value) => {
  instructionsArr.push({ order: value + 1, text: key.innerText });
});

console.log(instructionsArr);
