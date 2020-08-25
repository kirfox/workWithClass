'use strict';

//class DomElement
function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

//method class DomElement
DomElement.prototype.createdElement = function(){
    let div;
    
    //the first character is checked for a dot
    if (this.selector[0] === '.') {
        div = document.createElement("div");
        div.className = this.selector.slice(1);
    } else {
        div = document.createElement("p");
        div.id = this.selector.slice(1);
    }
    
    //styles are add
    div.style.height = this.height + 'px';
    div.style.width = this.width + 'px';
    div.style.background = this.bg;
    div.style.fontSize = this.fontSize + 'px';
    document.body.appendChild(div);

    //input text in the element
    let anythingText = prompt('Введите любой текст', 'алеша');
    let addText = document.createTextNode(anythingText);
    div.appendChild(addText);
};

//new object based on the DomElement class
let DomElement1 = new DomElement('.block', 200, 200, 'red', 50);
let DomElement2 = new DomElement('#best', 500, 500, 'yellow', 100);


DomElement1.createdElement();
// DomElement2.createdElement();
