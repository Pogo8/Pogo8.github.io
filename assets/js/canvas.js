// /*
// 	Massively by HTML5 UP
// 	html5up.net | @ajlkn
// 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
// */

// //Function to get the mouse position
// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');

// function getMousePos(canvas, event) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: event.clientX - rect.left,
//         y: event.clientY - rect.top
//     };
// }
// //Function to check whether a point is inside a rectangle
// function isInside(pos, rect){
//     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
// }
// //The rectangle should have x,y,width,height properties

// //titlebar color
// context.fillStyle = '#e7eaed';
// context.fillRect(0,0,160,30);

// //titlebar
// context.beginPath();
// context.rect(0,0,160,30);
// context.stroke();

// //Window color
// context.fillStyle = '#FFFFFF';
// context.fillRect(0,30,220,220);

// //window
// context.beginPath();
// context.rect(0,30,220,220);
// context.stroke();

// //minimize color
// context.fillStyle = '#e7eaed';
// context.fillRect(160,0,30,30);

// //minimize
// context.beginPath();
// context.rect(160,0,30,30);
// context.stroke();

// //close color
// context.fillStyle = '#d31224';
// context.fillRect(190,0,30,30);

// //close
// context.beginPath();
// context.rect(190,0,30,30);
// context.stroke();

// //title text
// context.fillStyle = "black";
// context.font = "12pt sans-serif";
// context.fillText("Window", 5, 21);

// //minimize text
// context.fillStyle = "black";
// context.font = "12pt sans-serif";
// context.fillText("_", 169, 21);

// //close text
// context.fillStyle = "white";
// context.font = "12pt sans-serif";
// context.fillText("X", 199, 21);


// //button
// context.beginPath();
// context.lineWidth = "4";
// context.strokeStyle = 'black';
// context.rect(5,430,100,30);
// context.stroke();
// //button text
// context.fillStyle = "black";
// context.font = "12pt non-serif";
// context.fillText("BUTTON", 22, 450);

// //button2 color
// context.fillStyle = 'black';
// context.fillRect(125,430,100,30);
// //button2
// context.beginPath();
// context.lineWidth = "4";
// context.strokeStyle = 'black';
// context.rect(125,430,100,30);
// context.stroke();
// //button2 text
// context.fillStyle = "white";
// context.font = "12pt non-serif";
// context.fillText("BUTTON", 143, 450);

// //textbox
// context.beginPath();
// context.lineWidth = "1";
// context.strokeStyle = 'black';
// context.rect(5,270,220,40);
// context.stroke();
// //textbox text
// context.fillStyle = "black";
// context.font = "12pt serif";
// context.fillText("Textbox", 90, 294);

// //textbox
// context.beginPath();
// context.lineWidth = "1";
// context.strokeStyle = 'black';
// context.rect(5,330,270,80);
// context.stroke();
// //textbox text
// context.fillStyle = "black";
// context.font = "12pt serif";
// context.fillText("Textbox 2", 110, 374);

// //menu color
// context.fillStyle = '#e7eaed';
// context.fillRect(5,480,190,30);
// //menu
// context.beginPath();
// context.lineWidth = "1";
// context.strokeStyle = 'black';
// context.rect(5,480,190,30);
// context.stroke();
// //menu text
// context.fillStyle = "black";
// context.font = "12pt sans-serif";
// context.fillText("Menu                          ▼", 15, 500);

// //menu option 1
// context.beginPath();
// context.lineWidth = "1";
// context.strokeStyle = 'black';
// context.rect(5,510,190,30);
// context.stroke();
// //menu text
// context.fillStyle = "black";
// context.font = "12pt serif";
// context.fillText("Option 1", 15, 530);

// //menu option 2
// context.beginPath();
// context.lineWidth = "1";
// context.strokeStyle = 'black';
// context.rect(5,540,190,30);
// context.stroke();
// //menu text
// context.fillStyle = "black";
// context.font = "12pt serif";
// context.fillText("Option 2 ", 15, 560);

// //menu option 3
// context.beginPath();
// context.lineWidth = "1";
// context.strokeStyle = 'black';
// context.rect(5,570,190,30);
// context.stroke();
// //menu text
// context.fillStyle = "black";
// context.font = "12pt serif";
// context.fillText("Option 3 ", 15, 590);




// var close = {
//     x:190,
//     y:0,
//     width:30,
//     height:30
// };
// var minimize = {
// 	x:160,
//     y:0,
//     width:30,
//     height:30
// }

// var button1 = {
// 	x:5,
//     y:430,
//     width:100,
//     height:30
// }

// var button2 = {
// 	x:125,
//     y:430,
//     width:100,
//     height:30
// }
// //Binding the click event on the canvas
// canvas.addEventListener('click', function(evt) {
//     var mousePos = getMousePos(canvas, evt);

//     if (isInside(mousePos,close)) {
//         alert('clicked close');
//     }else if (isInside(mousePos,minimize)) {
//         alert('clicked minimize');
//     }else if (isInside(mousePos,button1)) {
//         alert('clicked button 1');
//     } else if (isInside(mousePos,button2)) {
//         alert('clicked button 2');
//     }    
// }, false);



























// // var elem = document.getElementById('myCanvas'),
// //     elemLeft = elem.offsetLeft,
// //     elemTop = elem.offsetTop,
// //     context = elem.getContext('2d'),
// // 	elements = [];
	


// // // Add event listener for `click` events.
// // var i = 0;
// // elem.addEventListener('click', function(event) {
// //     var x = event.pageX - elemLeft,
// //         y = event.pageY - elemTop;
// // 	console.log(x, y);
// //     // elements.forEach(function(element) {
// //     //     if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
// // 	// 		alert(i);
// //     //     }
// // 	// });
// // 	elements.forEach(function(element) {
// //         if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
// // 			alert(i);
// //         }
// // 	});
// // 	i++;

// // }, false);



// // // Add element.
// // elements.push({ //window
// //     colour: 'black',
// //     width: 220,
// //     height: 220,
// //     top: 30,
// // 	left: 0,
// // 	name: 'window'
// // });

// // elements.push({ //titlebar
// //     colour: 'green',
// //     width: 160,
// //     height: 30,
// //     top: 0,
// // 	left: 0,
// // 	name: 'title'
// // });

// // elements.push({ //minimize
// //     colour: 'blue',
// //     width: 30,
// //     height: 30,
// //     top: 0,
// // 	left: 160,
// // 	name: 'minimize'
// // });

// // elements.push({ //close
// //     colour: 'red',
// //     width: 30,
// //     height: 30,
// //     top: 0,
// // 	left: 190,
// // 	name: 'close'
// // });

// // // Render elements.
// // elements.forEach(function(element) {
// // 	context.beginPath();
// // 	context.strokeStyle=element.colour;
// //     // context.fillStyle = element.colour;
// // 	context.rect(element.left, element.top, element.width, element.height);
// // 	context.stroke();
// // });




























// // var elements = [];
// // var elemLeft = elem.offsetLeft;
// // var elemTop = elem.offsetTop;

// // function getMousePos(canvas, event) {
// //     var rect = canvas.getBoundingClientRect();
// //     return {
// //         x: event.clientX - rect.left,
// //         y: event.clientY - rect.top
// //     };
// // }
// // //Function to check whether a point is inside a rectangle
// // function isInside(pos, rect){
// //     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
// // }

// // var canvas = document.getElementById('myCanvas');
// // var con = canvas.getContext('2d');

// // //The rectangle should have x,y,width,height properties
// // var close = {
// //     x:190,
// //     y:0,
// //     width:30,
// //     height:30
// // };

// // var minim = {
// // 	x:160,
// //     y:0,
// //     width:30,
// //     height:30
// // };

// // elements.push({ //window
// //     colour: '#05EFFF',
// //     width: 220,
// //     height: 250,
// //     top: 0,
// //     left: 0
// // });

// // elements.push({ //titlebar
// //     colour: '#05EFFF',
// //     width: 220,
// //     height: 30,
// //     top: 0,
// //     left: 0
// // });

// // elements.push({ //minimize
// //     colour: '#05EFFF',
// //     width: 30,
// //     height: 30,
// //     top: 0,
// //     left: 160
// // });

// // elements.push({ //close
// //     colour: '#05EFFF',
// //     width: 30,
// //     height: 30,
// //     top: 0,
// //     left: 190
// // });

// // elements.forEach(function(element) {
// //     context.fillStyle = element.colour;
// //     context.fillRect(element.left, element.top, element.width, element.height);
// // });

// // //Binding the click event on the canvas
// // canvas.addEventListener('click', function(evt) {
// //     var mousePos = getMousePos(canvas, evt);

// //     if (isInside(mousePos,close)) {
// //         alert('clicked close');
// //     }else if (isInside(mousePos, minim)){
// // 		alert('clicked minimize');
// // 	}
// // }, false);


// // function getMousePos(canvas, event) {
// //     var rect = canvas.getBoundingClientRect();
// //     return {
// //         x: event.clientX - rect.left,
// //         y: event.clientY - rect.top
// //     };
// // }
// // //Function to check whether a point is inside a rectangle
// // function isInside(pos, rect){
// //     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
// // }

// // var canvas = document.getElementById('myCanvas');
// // var context = canvas.getContext('2d');
// // //The rectangle should have x,y,width,height properties
// // var rect = {
// //     x:250,
// //     y:350,
// //     width:200,
// //     height:100
// // };
// // //Binding the click event on the canvas
// // canvas.addEventListener('click', function(evt) {
// //     var mousePos = getMousePos(canvas, evt);

// //     if (isInside(mousePos,rect)) {
// //         alert('clicked inside rect');
// //     }else{
// //         alert('clicked outside rect');
// //     }   
// // }, false);