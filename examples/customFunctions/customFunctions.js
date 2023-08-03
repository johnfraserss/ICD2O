/*
 * Example of using custom functions based on the custom variables work completed earlier
 * For information on different variable types,
 * scroll to the bottom of this file.
 */

let diameter; //diameter of circle
const PI = 3.14159265358979;

function setup() {
  createCanvas(500, 500);
  diameter = 5;
}

//draw an ever-growing circle
function draw() {
  background(0);
  fill(255);
  stroke(255);
  ellipse(width/2, height/2, diameter, diameter);
  diameter = diameter + 1; //increase the diameter by 1 every frame of draw()
  
  //Calling the area function to display the value on-screen
  const info = "Area = " + area(diameter/2);  // this variable gets creates every time the draw loop occurs, so const works here.
  text(info, 20, 20); //display information about the diameter value in the top left corner

}

//change diameter back to 5 on mouse click
function mousePressed() {
  diameter = 5;
}

// Calculates the area of a circle given the radius
function area(radius) {
  if (isNaN(radius)) {
    return NaN;
  }
  return Math.PI * radius * radius;
}


/*  

Functions
---------
Functions are used to encapsulate and organize **reusable** code that is used to perform a single action.  We've have been using a functions quite often throughout previous work (math functions, `console.log()`, string functions, etc.)

Functions have a different structure from anything we've done previously, and we'll take this on step-by-step.  The basic setup of a function is as follows:

Structure
---------
// Description of the function
function functionName( parameter1, parameter2, ... ) {
    // body of the function
    return expression
}

The above concepts break down as follows:
* `function` tells the computer you are going to be creating a function
* `functionName` is the name of the function.  The name of the function should be clear on its purpose.
* `parameter#` are different parameters that the function accepts.  These parameters are used inside the function, just as you would use variables.  This section can be left blank as well (i.e. `function functionName() {`).
* `// Description ` this area is used to describe the purpose of the function.  We will go further in-depth on this in the ICS3U course.
* `body` this area is where the function does whatever the function is supposed to do (ideally a short task).
* `return` this line will return back to where you called the function, or return a value to wherever the function is called.

Before being able to use a function, it must be defined.  As such, you will need to define functions before using them.

Notes
-----
- Any variables that are *created* inside a function **only exist inside that function.**
- functions should only use parameters to receive information, and not directly use `keyCode` or `button`


*/
