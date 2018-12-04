
//   // Tree ADT
//   function Node(data) {
//     this.data = data;
//     this.numChild = 0;
//     this.parent = null;
//     this.children = [];
// }

//   function create_root() {
//     var data = {
//       id: 0,
//       name: 'root',
//       type: 'window',
//       graphic: {
//         x: 0,
//         y: 0,
//         width: 100,
//         height: 50,
//         color: 'lightskyblue'
//       }
//     };
//     var root = new Node(data);

//     return root;
//   }

//   function add_node(node, root) {
//     root.children.push(node);
//     node.parent = root;
//     root.numChild += 1;
//     while (root.parent != null) {
//       root = root.parent;
//       root.numChild += 1;
//     }
//   }

//   //search node by id
//   function search_node(node, id) {
//     if (node.data.id == id) {
//       return node;
//     } else if (node.children.length > 0) {
//       var i;
//       var result = null;
//       for (i = 0; result == null && i < node.children.length; i++) {
//         result = search_node(node.children[i], id);
//       }
//       return result;
//     }
//     return null;
//   }

//   function change_node(root, id, data) {
//     var node = search_node(root, id);
//     if (node == null) {
//       alert('there is no node to delete');
//     }
//     node.data = data;
//   }

//   function delete_node(root, id) {
//     var node = search_node(root, id);
//     if (node == null) {
//       alert('there is no node to delete');
//     }
//     var p_node = node.parent;
//     for (var i = 0; i < p_node.children.length; i++) {
//       if (p_node.children[i].data.id == id) {
//         break;
//       }
//     }
//     p_node.children.remove(i);
//   }





//   //Graphics ADT
//   function renderGraphic(node) {
//     if (node.data.type == 'window') {
//       createWindow(node);
//     } else if (node.data.type == 'button') {
//       createButton(node);
//     } else if (node.data.type == 'text') {
//       createTextBox(node);
//     } else if (node.data.type == 'menu') {
//       createMenu(node);
//     }
//   }

//   function init(node) {
//     var g = node.data.graphic;
//     var context = node.data.graphic.context;

//     if (node.data.type == 'window') {
//       context.fillstyle = g.textColor;
//       context.strokeRect(g.x, g.y, g.width, g.height);
//     } else {
//       context.fillStyle = g.backColor;
      
//       context.fillRect(g.x, g.y, g.width, g.height);
//     }

//     if (g.exit == true) {
//       dButton = {
//         x: g.x + g.width - 25,
//         y: g.y,
//         width: 25,
//         height: 25
//       };
//       deletionWindow(dButton, node);
//     }

//     //Text
//     context.fillStyle = g.textColor;
//     //Title
//     context.font = g.titleSize.toString() + "px Arial";
//     context.textAlign = "center";
//     context.fillText(g.title, g.x + g.width / 2, g.y + g.lineHeight / 2);
//     //Body
//     context.font = g.textSize.toString() + "px Arial";
//     context.textAlign = "center";
//     context.fillText(g.text, g.x + g.width / 2, g.y + g.height / 2);
//   }




//   //Graphical Components
//   function createWindow(node) {
//     var g = node.data.graphic;
//     init(node);
//     //Title & Content Division Line
//     drawline(g.context,g.x, g.y + g.lineHeight, g.x + g.width, g.y + g.lineHeight, "dimgrey");
//   }

//   function createTextBox(node) {
//     var g = node.data.graphic;
//     init(node);
//   }

//   function createButton(node) {
//     var g = node.data.graphic;
//     init(node);

//     //Alert Event
//     if (g.alert == true) {
//       AlertEvent(node);
//     }

//     //Call Child Event
//     if (g.createChild == true) {
//       CreateChildEvent(node);
//     }
    
//     if (g.dialog == true) {
//       DialogEvent(node);
//     }
//   }

//   function createMenu(node) {
//     var g = node.data.graphic;
//     init(node);

//     //Add Menu button
//     mButton = {
//       x: g.x,
//       y: g.y,
//       width: 25,
//       height: 25
//     };
//     menuWindow(mButton, node);
//   }




//   //Event Components

//   function deletionWindow(dButton, node) {
//     var g = node.data.graphic;
//     var context = node.data.graphic.context;
//     var d = dButton;
//     //Deletion Graphic Components
//     context.fillStyle = "lightcoral";
//     context.fillRect(d.x, d.y, d.width, d.height);
//     drawline(context,5, 5, 10, 10);
//     drawline(context,d.x + 3, d.y + 3, d.x + d.width - 3, d.y + d.height - 3, "white");
//     drawline(context,d.x + d.width - 3, d.y + 3, d.x + 3, d.y + d.height - 3, "white");

//     //Deletion Event Handler
//     DeletionEvent(dButton, node);
//   }

//   function menuWindow(mButton, node) {
//     var g = node.data.graphic;
//     var m = mButton;
//     var context = g.context;
//     //Menu Graphic Components
//     context.fillStyle = "lightgrey";
//     context.fillRect(m.x, m.y, m.width, m.height);
//     drawline(context,m.x, m.y + m.height / 2, m.x + m.width, m.y + m.height / 2, "white");
//     drawline(context,m.x + m.width / 2, m.y + m.height, m.x + m.width / 2, m.y, "white");

//     //Drop-down Event Handler
//     MenuEvent(m, node);
//   }



//   //Event Handler
//   function DeletionEvent(dButton, node) {
//     var g = node.data.graphic;
//     var canvas = node.data.graphic.canvas;
//     var context = node.data.graphic.context;
    
//     canvas.addEventListener('click', function(evt) {
//       var mousePos = getMousePos(canvas, evt);
//       if (isInside(mousePos, dButton)) {
//         g.alert = false;
//         context.clearRect(g.x - 1, g.y - 1, g.width + 2, g.height + 2);
//         canvas.style.zIndex = "-1";
//       }
//     }, false);
//   }

// 	//Alert to make sure the lowest element should be closed frist
//   function AlertEvent(node) {
//     var g = node.data.graphic;
//     var canvas = node.data.graphic.canvas;
//     canvas.addEventListener('click', function(evt) {
//       var mousePos = getMousePos(canvas, evt);
//       if (isInside(mousePos, g) == 0 && g.alert == true) {
//         alert(node.data.graphic.text + " needs to be closed first!");
//       }
//     }, false);
//   }
  
//   function DialogEvent(node) {
//   	var g = node.data.graphic;
//     var canvas = g.canvas;
//     var context = g.context;
//     canvas.addEventListener('click', function(evt) {
//       var mousePos = getMousePos(canvas, evt);
//       if (isInside(mousePos, g) == true) {
//   			var url = prompt("url:", "https://www.naver.com");
//         if(url)
//         	window.open(url);
//   		}
//     }, false);
//   }

//   function CreateChildEvent(node) {
//     var g = node.data.graphic;
//     canvas = g.canvas;
//     context = g.context;
//     canvas.addEventListener('click', function(evt) {
//       var mousePos = getMousePos(canvas, evt);
//       if (isInside(mousePos, g)) {
//         var callId = node.parent.data.id * 10 + node.data.id;
//         var s_node = search_node(node.parent, callId);
//         renderGraphic(s_node);
//         s_node.data.graphic.alert = true;
//         s_node.data.graphic.canvas.style.zIndex = "2";
//       }
//     }, false);
//   }

//   function MenuEvent(mButton, node) {
//     var clicked = false;
//     var g = node.data.graphic;
//     var canvas = g.canvas;
//     var context = g.context;
//     canvas.addEventListener('click', function(evt) {
//       var mousePos = getMousePos(canvas, evt);
//       if (isInside(mousePos, mButton)) {
//         if (clicked == false) {
//           for (var i = 0; i < g.menuList.length; i++) {
//             var data = {
//               id: i + 1,
//               type: "button",
//               graphic: {
//               	canvas: canvas,
//                 context: context,
//                 x: g.x,
//                 y: g.y + (g.height + 1) * (i + 1),
//                 width: g.width / 2,
//                 height: g.height,
//                 backColor: g.backColor,
//                 textColor: g.textColor,
//                 title: "",
//                 titleSize: 0,
//                 text: g.menuList[i],
//                 textSize: g.textSize,
//                 exit: false,
//                 alert: false,
//                 createChild: true,
//               }
//             };
//             var temp = new Node(data);
//             add_node(temp, node);
//             renderGraphic(temp);
//           }
//           clicked = true;
//         } else {
//           context.clearRect(g.x, g.y + (g.height + 1),
//             g.width / 2 + 1, (g.height + 1) * (g.menuList.length));
//           var p_g = node.parent.data.graphic;
//           drawline(context,g.x, p_g.y + p_g.lineHeight, g.x + g.width / 2 + 2,
//             p_g.y + p_g.lineHeight, "dimgrey");
//           //renderGraphic(node.parent); //pseudo-event
//           //for(var j = 0; j<node.parent.numChild;j++){
//           //	renderGraphic(node.parent.children[j]);
//           //}
//           clicked = false;
//         }
//       }
//     }, false);
//   }




//   //MAIN
//   window.onload = function() {
//     canvas1 = document.getElementById("canvas1");
//     if (canvas1 == null || canvas1.getContext == null) return;
//     context1 = canvas1.getContext("2d");
    
//     canvas2 = document.getElementById("canvas2");
//     if (canvas2 == null || canvas2.getContext == null) return;
//     context2 = canvas2.getContext("2d");
    
// 		//canvas.style.display = "none";
//     //Create Tree
//     var tree = create_root();
//     tree.data.graphic = {
//       context:context1,
//       canvas:canvas1,
//       x: 0,
//       y: 0,
//       width: canvas1.width,
//       height: canvas1.height,
//       backColor: "white",
//       textColor: "dimgrey",
//       title: "Top Window",
//       titleSize: 20,
//       text: "hello world",
//       textSize: 16,
//       lineHeight: 70,
//       exit: true
//     };
//     renderGraphic(tree);


//     //File Menu
//     var data = {
//       id: 1,
//       name: 'FileMenu',
//       type: 'menu',
//       graphic: {
//         context:context1,
//         canvas:canvas1,
//         x: 2,
//         y: 1,
//         width: 80,
//         height: 26,
//         backColor: "lightpink",
//         textColor: "white",
//         title: "",
//         titleSize: 0,
//         text: "File",
//         textSize: 14,
//         menuList: ["F1", "F2", 'F3'],
//         exit: false
//       }
//     }
//     var node = new Node(data);
//     add_node(node, tree);
//     renderGraphic(tree.children[0]);

//     //Edit Menu
//     var data = {
//       id: 2,
//       name: 'EditMenu',
//       type: 'menu',
//       graphic: {
//         context:context1,
//         canvas:canvas1,
//         x: 84,
//         y: 1,
//         width: 80,
//         height: 26,
//         backColor: "lightpink",
//         textColor: "white",
//         title: "",
//         titleSize: 0,
//         text: "Edit",
//         textSize: 14,
//         menuList: ["E1",…