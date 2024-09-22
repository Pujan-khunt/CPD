// 'canvas' is an HTML element which allows rendering of 2D shapes and bitmap images
// Document.createElement() creates an element but to display it on the webpage it also needs to be
// added on the DOM.
let canvas = Document.createElement('canvas');
// sets an ID to canvas which allows easier access to modify its properties
canvas.id = "drawCanvas";

// To add the newly created element canvas into DOM i.e to put it onto the webpage we use appendChild(element)
// In the DOM, the entire structure of the webpage is represented as a tree of nodes
// the appendChild method adds a node as the last child of a specified parent in this case its document(or <body>)
// It inserts the node at the end of the list of children, if the <body> already has other elements then the new element
// will be inserted after all the other elements

// in short: ParentElement.appendChild(ChildElement) will append the ChildElement as a child node for ParentElement in the tree.

// It is used because Document.createElement() just allocates memory and doesn't load it into the DOM

// A visual example of this line would be:

// HTML code before adding this line
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Page</title>
//   </head>
//   <body>
//     <h1>Welcome to My Page</h1>
//     <p>Here's some text on my page.</p>
//   </body>
// </html>

document.appendChild(canvas);

// HTML code after adding this line
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Page</title>
//   </head>
//   <body>
//     <h1>Welcome to My Page</h1>
//     <p>Here's some text on my page.</p>
//     <canvas id="drawCanvas"></canvas>
//   </body>
// </html>



// The canvas wont move on scrolling
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.bottom = '0';
canvas.style.width = '100vw'; // 100vw: take 100% of the visible (viewport) width
canvas.style.height = '100vh'; // 100vh: take 100% of the visible (viewport) height
// Set z-index to highest value so it appears before anything else
canvas.style.zindex = '9999';

