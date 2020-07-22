//Talking to console
console.log("hello, console"); //method 1

/*function main() //method 2
{
    console.log("from body onload");
}
*/
function square(i)
{
    let num = i;
    return num*num;
}

function main()
{
    console.log(square(5));
}

console.log("----------------------------------")
let colors = ["red", "green", "blue"];
console.log(colors);


console.log("----------------------------------")
for (let i in colors)
    console.log(colors[i]);

console.log("----------------------------------")
for(let i = 0; i < colors.length; i++) 
    console.log(colors[i]);

console.log("----------------------------------")
colors.push("yellow");
console.log(colors);

console.log("----------------------------------")
let discardedColor = colors.pop();
console.log(discardedColor);

console.log("----------------------------------")
let colors2 = new Array("orange", "maroon", "aqua");
colors = colors.concat(colors2);
console.log(colors);

console.log("----------------------------------")
colors.reverse();
console.log(colors);

console.log("----------------------------------")
colors.sort();
console.log(colors);

console.log("----------------------------------")
let colorString = colors.join(", ");
console.log(colorString);

// Associative arrays

console.log("----------------------------------")
let yankees =
   {"Ruth": "RF", "Gehrig": "1B", "Mantle": "CF", "Jeter": "SS"};
console.log(yankees["Gehrig"]);
console.log(yankees.Gehrig);
for (let yankee in yankees)
   console.log(
      yankee + " => " + yankees[yankee]);
 // Objects

console.log("----------------------------------")
let orioles =
   {RobinsonB: "3B", RobinsonF: "LF", Palmer: "P", Powell: "1B"};
console.log(orioles.Palmer);
console.log(orioles["Palmer"]);
for (let oriole in orioles)
   console.log(
      oriole + " => " + orioles[oriole]);

