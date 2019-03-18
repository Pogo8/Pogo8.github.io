---
layout: page
title:  "[HCI-Under] Extended Tree Graphics Program"
date:   2018-12-04
excerpt: "Write and demonstrate a routine that takes a mouse input and identifies the object that
is clicked"
image: "/images/kuhci/kuhci.jpg"
type : ku
permalink: "/ku/:title/"
---

<header class="major">
    <span class="date">{{page.date | date_to_string}}</span>
    <h2>{{page.title}}</h2>
</header>
<body>
    <div class="dtree">
    <!-- 
     -->
     <hr>
     not finished yettt ...please finish this soon bruh
        <canvas id="TreeGUI" width="800" height="800"></canvas>
        <!-- 
         -->
        <script>
        var idcount = 0;
        function Node(parid, id, name){
            this.parid = parid; //id of parent node
            this.id = id; //id of node
            this.name = name; //name of node
            this.children = []; //store child node in array .push
            this.childcount = 0; //how many children?
            // this.parent = null; //store parent
        }
        function Tree(name){ //create new tree
            var root = new Node(-1, 0, name); //parent node set to -1, id 0, name root
            return root
        }
        function addNode(parent, name){ //add node to parent with name
            idcount++; //global id counter
            var adding = new Node(parent, idcount, name); //node to be added
            parent.children.push(adding); //push this node into parent's children array
            parent.childcount++;
            // adding.parent = parent; //new node's parent is parent
            adding.parid = parent.id; //new node's parent id is parent.id
        }
        function searchNode(node, id){
            if(node.id == id){ //if root
                // console.log(node);
                return node;
            }else{ //if not root
                // console.log('else들어옴');
                for(i in node.children){
                    // console.log(i);
                    var search = searchNode(node.children[i], id);
                    if(search != undefined){
                        return search
                    }
                } 
            }  
        }
        function deleteNode(node, id){
            // var del = searchNode(node, id);
            // // console.log('들어옴');
            // console.log(del);
            var del = searchNode(node, id); //node to delete
            // console.log(del.childcount);
            var parent = searchNode(tree, del.parid); //parent of the node to delete
            for(i in parent.children){
                var obj = parent.children[i];
                // console.log(obj.id);
                if(obj.id == id){
                    // console.log('??');
                    parent.children.splice(i,1);
                    idcount--;
                    parent.childcount--;
                }
            }
            // console.log(parent);
            // idcount--;
        }
        var window1 = Tree('window1');
        var window2 = Tree('window2');
        var menu = Tree('menu');
        var textbox = Tree('textbox');
        // addNode(tree.children[1], 'child9');
        addNode(window1, '_');
        addNode(window1, 'X');
        addNode(window2, '_');
        addNode(window2, 'X');
        console.log(window1);
        console.log(window2);
        console.log(menu);
        console.log(textbox);
        //  <!-- Canvas Print -->
        var canvas = document.getElementById('TreeGUI');
        var context = canvas.getContext('2d');
        function printWindow(tree, x, y){
            context.clearRect(x,y,400,400)
            //default x, y
            //default box
            context.beginPath();
            //titlebar
            context.fillStyle = '#e7eaed';
            context.fillRect(x,y,400,30);
            context.rect(x, y, 400, 30);
            //actual window
            context.rect(x, y+30, 400, 370); 
            context.stroke();
            //default text
            context.fillStyle = "black";
            context.font = "12pt sans-serif";
            context.fillText(tree.name, x+5, y+20);
            if(tree.name == 'window1'){
                win1win.x = x;
                win1win.y = y;
                win1win.width = 400;
                win1win.height = 400;
            } else if (tree.name == 'window2'){
                win2win.x = x;
                win2win.y = y;
                win2win.width = 400;
                win2win.height = 400;
            }
            for(i in tree.children){
                // console.log(tree.children[i].name == '_');
                if(tree.children[i].name == '_'){
                    //minimize
                    context.fillStyle = 'gray';
                    context.fillRect(x+340,y,30,30);
                    context.rect(x+340, y, 30, 30);
                    context.fillStyle = "black";
                    context.font = "12pt sans-serif";
                    context.fillText("_", x+348, y+21);
                    if(tree.name == 'window1'){
                        win1min.x = x+340;
                        win1min.y = y;
                        win1min.width = 30;
                        win1min.height = 30;
                    } else if (tree.name == 'window2'){
                        win2min.x = x+340;
                        win2min.y = y;
                        win2min.width = 30;
                        win2min.height = 30;
                    }
                }else if(tree.children[i].name == 'X'){           
                    //close
                    context.fillStyle = '#d31224';
                    context.fillRect(x+370,y,30,30);
                    context.rect(x+370, y, 30, 30);
                    context.fillStyle = "black";
                    context.font = "12pt sans-serif";
                    context.fillText("X", x+378, y+21);
                    context.fillText("_", x+348, y+21);
                    if(tree.name == 'window1'){
                        win1cls.x = x+370;
                        win1cls.y = y;
                        win1cls.width = 30;
                        win1cls.height = 30;
                    } else if (tree.name == 'window2'){
                        win2cls.x = x+370;
                        win2cls.y = y;
                        win2cls.width = 30;
                        win2cls.height = 30;
                    }
                }
            }
            context.closePath();
        }
        var win1win = {
            x:0,
            y:0,
            width:0,
            height:0
        }
        var win1min = {
            x:0,
            y:0,
            width:0,
            height:0
        }
        var win1cls = {
            x:0,
            y:0,
            width:0,
            height:0
        }
        var win2win = {
            x:0,
            y:0,
            width:0,
            height:0
        }
        var win2min = {
            x:0,
            y:0,
            width:0,
            height:0
        }
        var win2cls = {
            x:0,
            y:0,
            width:0,
            height:0
        }
        canvas.addEventListener('click', function(evt) {
            var mousePos = getMousePos(canvas, evt);
            if (isInside(mousePos,win1win)) {
                alert('clicked window1');
            }else if (isInside(mousePos,win1min)) {
                alert('clicked window1 minimize button');
            }else if (isInside(mousePos,win1cls)) {
                alert('clicked window1 close button');
            }else if (isInside(mousePos,win2win)) {
                alert('clicked window2');
            }else if (isInside(mousePos,win2min)) {
                alert('clicked window2 minimize button');
            }else if (isInside(mousePos,win2cls)) {
                alert('clicked window2 close button');
            }
        }, false);
        function getMousePos(canvas, event) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        }
        //Function to check whether a point is inside a rectangle
        function isInside(pos, rect){
            return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
        }
        printWindow(window1, 5, 5);
        printWindow(window2, 200,70);
        // drawTree(tree, 5, 5);
        </script>
    </div>
</body>