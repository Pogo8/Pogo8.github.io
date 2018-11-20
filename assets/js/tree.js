/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

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

// var canvas = document.getElementById('treeCanvas');
// var context = canvas.getContext('2d');
// //The rectangle should have x,y,width,height properties

// //titlebar color

// //close color
// context.fillStyle = '#d31224';
// context.fillRect(190,0,30,30);

// //close
// context.beginPath();
// context.rect(190,0,30,30);
// context.stroke();


// //close text
// context.fillStyle = "white";
// context.font = "12pt sans-serif";
// context.fillText("X", 199, 21);




// var close = {
//     x:190,
//     y:0,
//     width:30,
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


// Represents the node in the tree. Will be displayed as a small circle in the browser.
// x, y --> x, y co-ordinates of the center of circle
// r    --> radius of the circle
// ctx  --> context of the canvas
// data --> data to be displayed (Only number)

// var Node = function(x, y, rad, context, id, data){
//     this.draw = function(){
//         context.beginPath();
//         context.arc(x, y, rad, 0,  2*Math.PI);
//         context.stroke();
//         context.closePath();
//         context.strokeText(data, x, y);
//     }

//     this.getX = function(){return x;};
//     this.getY = function(){return y;};
//     this.getID = function(){return id;};
//     this.getData = function(){return data;};
// };

// var Tree = function(){
//     var canvas = document.getElementById("treeCanvas");
//     var context = canvas.getContext('2d');

//     this.add = function(x, y, rad, context, id, data){
//         var node = new Node(x, y, rad, context, id, data);
//         node.draw();
//         return node;
//     };

// }

// var tree = new Tree();

// // tree.add(5,5,10, context, 1, 'Test');
// // drawNode.draw(10,10, 10, context, 1, 'hi');
// context.beginPath();
// context.arc(30, 30, 30, 0, 2*Math.PI);
// context.stroke();
// context.closePath();
// context.strokeText(data, x, y);
// print("test");

// var drawNode = function(x, y, rad, context, id, data){
//     this.draw = function(){
//         context.beginPath();
//         context.arc(x, y, rad, 0, 2*Math.PI)
//         context.stroke();
//         context.closePath();
//         context.strokeText(data, x, y);
//     }
// };

var canvas = document.getElementById("treeCanvas");
var context = canvas.getContext('2d');

var previous={
    x: 0,
    y: 0,
    id: null,
    level: 0
}

var nodeArr= [];

var level = 0;
var hasRoot = false;
var maxnode = 5;
var nodecount = 0;
var nodes = [];
var changecount = 1;

//create root node
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = 'black';
context.rect(100, 30, 140, 30);
context.stroke();
context.fillStyle = "black";
context.font = "12pt non-serif";
context.fillText("Create Root Node", 110, 50);
//create child
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = 'black';
context.rect(270, 30, 140, 30);
context.stroke();
context.fillStyle = "black";
context.font = "12pt non-serif";
context.fillText("Create Child Node", 280, 50);
//change root
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = 'black';
context.rect(440, 30, 140, 30);
context.stroke();
context.fillStyle = "black";
context.font = "12pt non-serif";
context.fillText("Change Root Node", 450, 50);
//delete node
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = 'black';
context.rect(610, 30, 140, 30);
context.stroke();
context.fillStyle = "black";
context.font = "12pt non-serif";
context.fillText("Delete Node", 645, 50);

var createrootbutton = {
	x:100,
    y:30,
    width:140,
    height:30
}

var createchildbutton = {
	x:270,
    y:30,
    width:140,
    height:30
}

var changerootbutton = {
    x:440,
    y:30,
    width:140,
    height:30
}
var deletenodebutton = {
    x:610,
    y:30,
    width:140,
    height:30
}

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);

    if (isInside(mousePos,createrootbutton)) {
        create_root();
        // alert(nodeArr[0].x);
    } else if (isInside(mousePos,createchildbutton)) {
        if(hasRoot==false){
            alert('no root node');
        } else{
            add_node();
            // alert(nodecount);
        }
    } else if (isInside(mousePos,changerootbutton)) {
        if(hasRoot==false){
            alert('No node to change');
        }else{
            changeRoot();
        }
    }else if (isInside(mousePos,deletenodebutton)) {
        if(nodeArr.length == 0){
            alert('No nodes to delete');            
            nodecount = 0;
            level = 0;
            changecount = 1;
        }else{
            delete_node();
        }
    } 
    
}, false);




var node = function(x, y, rad, context, id, data, level){
    this.draw = function(){
        context.beginPath();
        context.lineWidth = '1';
        context.arc(x, y, rad, 0, 2*Math.PI);
        context.stroke();
        context.closePath();
        context.fillText(data, x-22, y+5);
    }

    this.getX = function(){return x;};
    this.getY = function(){return y;};
    this.getRadius = function(){return rad;};
    this.getID = function(){return id;};
    this.getData = function(){return data;};
    this.getLevel = function(){return level;};

    previous.x = x;
    previous.y = y;
    previous.id = id;
    previous.level = level;
};


// var hello = new node(50, 50, 30, context, 1, 'hello');
// hello.draw();



var create_root = function(){
    if (hasRoot == false){
        var root = new node(400, 150, 30, context, 0, 'ROOT', 0); 
        root.draw();
        hasRoot = true;
        level = 1;
        // nodes.push(root.getID());
        nodeArr.push({x: root.getX(), y: root.getY(), id:root.getID(), level: root.getLevel()});
        // nodes.push();
        // elements.push(root);
    }else{
        alert('Already has a root node!');
    }
}

var add_node = function(){
    if(previous.level != level && nodecount == 0){
        // alert(nodeArr[changecount-1].level);
        var childnode = new node(nodeArr[changecount-1].x, previous.y+70, 30, context, previous.id+1, previous.id+1, level);
        childnode.draw();
        nodecount = 1;
        // nodes.push(childnode.getID());
        nodeArr.push({x: childnode.getX(), y: childnode.getY(), id:childnode.getID(), level: childnode.getLevel()});
    } else if(previous.level == level && nodecount == 1){
        context.clearRect(0,previous.y-31,800,70);
        var node1 = new node(previous.x-40, previous.y, 30, context, previous.id, previous.id, previous.level);
        node1.draw();
        var node2 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node2.draw();
        // nodes.push(node2.getID());
        nodeArr.pop();
        nodeArr.push({x: node1.getX(), y: node1.getY(), id:node1.getID(), level: node1.getLevel()});
        nodeArr.push({x: node2.getX(), y: node2.getY(), id:node2.getID(), level: node2.getLevel()});
        nodecount = 2;
    } else if(previous.level==level && nodecount==2){
        context.clearRect(0,previous.y-31,800,70);
        var node1 = new node(previous.x-100, previous.y, 30, context, previous.id-1, previous.id-1, previous.level);
        node1.draw();
        var node2 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node2.draw();
        var node3 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node3.draw();
        // nodes.push(node3.getID());
        nodeArr.pop();
        nodeArr.pop();
        nodeArr.push({x: node1.getX(), y: node1.getY(), id:node1.getID(), level: node1.getLevel()});
        nodeArr.push({x: node2.getX(), y: node2.getY(), id:node2.getID(), level: node2.getLevel()});
        nodeArr.push({x: node3.getX(), y: node3.getY(), id:node3.getID(), level: node3.getLevel()});
        nodecount = 3;
    }else if(previous.level==level && nodecount==3){
        context.clearRect(0,previous.y-31,800,70);
        var node1 = new node(previous.x-180, previous.y, 30, context, previous.id-2, previous.id-2, previous.level);
        node1.draw();
        var node2 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node2.draw();
        var node3 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node3.draw();
        var node4 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node4.draw();
        // nodes.push(node4.getID());
        nodeArr.pop();
        nodeArr.pop();
        nodeArr.pop();
        nodeArr.push({x: node1.getX(), y: node1.getY(), id:node1.getID(), level: node1.getLevel()});
        nodeArr.push({x: node2.getX(), y: node2.getY(), id:node2.getID(), level: node2.getLevel()});
        nodeArr.push({x: node3.getX(), y: node3.getY(), id:node3.getID(), level: node3.getLevel()});
        nodeArr.push({x: node4.getX(), y: node4.getY(), id:node4.getID(), level: node4.getLevel()});
        nodecount = 4;
    }else if(previous.level==level && nodecount==4){
        context.clearRect(0,previous.y-31,800,70);
        var node1 = new node(previous.x-220, previous.y, 30, context, previous.id-3, previous.id-3, previous.level);
        node1.draw();
        var node2 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node2.draw();
        var node3 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node3.draw();
        var node4 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node4.draw();
        var node5 = new node(previous.x + 70, previous.y, 30, context, previous.id+1, previous.id+1, previous.level);
        node5.draw();
        // nodes.push(node5.getID());
        nodeArr.pop();
        nodeArr.pop();
        nodeArr.pop();
        nodeArr.pop();
        nodeArr.push({x: node1.getX(), y: node1.getY(), id:node1.getID(), level: node1.getLevel()});
        nodeArr.push({x: node2.getX(), y: node2.getY(), id:node2.getID(), level: node2.getLevel()});
        nodeArr.push({x: node3.getX(), y: node3.getY(), id:node3.getID(), level: node3.getLevel()});
        nodeArr.push({x: node4.getX(), y: node4.getY(), id:node4.getID(), level: node4.getLevel()});
        nodeArr.push({x: node5.getX(), y: node5.getY(), id:node5.getID(), level: node5.getLevel()});
        nodecount = 5;
    }
}

var changeRoot = function(){
    if(changecount < nodeArr.length){
        alert('Changing root node to node id: ' + nodeArr[changecount].id);
        level=changecount+1;
        nodecount = 0;
    } else if (changecount = nodeArr.length){
        changecount = 0;
        alert('Changing root node to node id: ROOT');
        level = changecount+1;
    }
    changecount++;
}


var delete_node = function(){
    context.clearRect(nodeArr[nodeArr.length-1].x-31,nodeArr[nodeArr.length-1].y-31,62,62);
    nodeArr.pop();
    if (nodeArr.length==0){
        hasRoot = 0;
    }    
}
// context.clearRect(19,19,62,62);


// var Node = function(x, y, rad, context, id, data){
//     this.draw = function(){
//         context.beginPath();
//         context.arc(x, y, rad, 0,  2*Math.PI);
//         context.stroke();
//         context.closePath();
//         context.strokeText(data, x, y);
//     }

//     this.getX = function(){return x;};
//     this.getY = function(){return y;};
//     this.getID = function(){return id;};
//     this.getData = function(){return data;};
// };

















// var Node = function(x,y,r, ctx, data) {
//     // left child of a node
//     this.leftNode = null; 
//     // right child of a node
//     this.rightNode = null;
    
//     // draw function. Responsible for drawing the node
//     this.draw = function() {
//       ctx.beginPath();
//       ctx.arc(x, y, r, 0, 2*Math.PI); 
//       ctx.stroke();
//       ctx.closePath();
//       ctx.strokeText(data, x, y);
//     };
    
//     // Simple getters
//     this.getData = function() { return data; }; 
//     this.getX = function() { return x; };
//     this.getY = function() { return y; };
//     this.getRadius = function() { return r; };
    
//     // Returns coordinate for the left child
//     // Go back 3 times radius in x axis and 
//     // go down 3 times radius in y axis
//     this.leftCoordinate = function() {
//       return {cx: (x - (3*r)), cy: (y + (3*r))}
//     };
//     // Same concept as above but for right child        
//     this.rightCoordinate = function() {
//       return {cx: (x + (3*r)), cy: (y+(3*r))}
//     };
//   };
  
//   // Draws a line from one circle(node) to another circle (node) 
//   var Line = function() {
//     // Takes 
//     // x,y      - starting x,y coordinate
//     // toX, toY - ending x,y coordinate
//     this.draw = function(x, y, toX, toY, r, ctx) {
//       var moveToX = x;
//       var moveToY = y + r;
//       var lineToX = toX;
//       var lineToY = toY - r;
//       ctx.beginPath();
//       ctx.moveTo(moveToX, moveToY);
//       ctx.lineTo(lineToX, lineToY);
//       ctx.stroke(); 
//     };
//   };
  


  // Represents the btree logic
//   var BTree = function() {
//     var c = document.getElementById('my-canvas');
//     var ctx = c.getContext('2d');
//     var line = new Line();
//     this.root = null;
    
//     var self = this;
    
//     // Getter for root
//     this.getRoot = function() { return this.root; };
    
//     // Adds element to the tree
//     this.add = function( data) {
//       // If root exists, then recursively find the place to add the new node
//       if(this.root) {
//         this.recursiveAddNode(this.root, null, null, data);  
//       } else {
//       // If not, the add the element as a root 
//         this.root = this.addAndDisplayNode(200, 20, 15, ctx, data);
//         return;
//       } 
//     };
  
//     // Recurively traverse the tree and find the place to add the node
//     this.recursiveAddNode = function(node, prevNode, coordinateCallback, data) {
//       if(!node) {
//         // This is either node.leftCoordinate or node.rightCoordinate
//         var xy = coordinateCallback();
//         var newNode = this.addAndDisplayNode(xy.cx, xy.cy, 15, ctx, data);
//         line.draw(prevNode.getX(), prevNode.getY(), xy.cx, xy.cy, prevNode.getRadius(), ctx)
//         return newNode; 
//       } 
//       else {
//         if(data <= node.getData()) {
//           node.left = this.recursiveAddNode(node.left, node, node.leftCoordinate, data);
//         } 
//         else {
//           node.right = this.recursiveAddNode(node.right, node, node.rightCoordinate, data);
//         }
//         return node;
//       }
//     };
    
//     // Adds the node to the tree and calls the draw function
//     this.addAndDisplayNode = function(x, y, r, ctx, data) {
//       var node = new Node(x, y, r, ctx, data);
//       node.draw();
//       return node;
//     };
//   };
  
//   var addToTree = function() {
//     input = document.getElementById('tree-input');
//     value = parseInt(input.value);
//     if(value)
//       btree.add(value);
//     else
//       alert("Wrong input");
//   };
  
//   var btree = new BTree();
