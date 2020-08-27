// querySelector
var hTag = document.querySelector('h1');
for( var i=0; i<hTag.length; i++) {
    hTag.style.color = "red";
}

// querySelectorAll
var pTags = document.querySelectorAll('p');
for( var i=0; i<pTags.length; i++) {
    pTags[i].style.color = 'green';
    pTags[i].style.fontFamily = 'Arial, Helvetica, sans-serif';
}

// getElementById & removeChild
function oneOCFunction() {
    var list = document.getElementById("mCharacters");
    list.removeChild(list.childNodes[0]);
}

// getElementsByClassName
var thirdContainer = document.getElementsByClassName('container');
for(var i=0; i<thirdContainer.length; i++) {
    thirdContainer[i].style.border = "11px solid red";
}

// getElementsByTagName
var headerText = document.getElementsByTagName('h2');
for(var i=0; i<headerText.length; i++) {
    headerText[i].style.border = "3px solid red";
}

// createElement
var newElement = document.createElement('h3');
var parentElement = document.getElementById('parent');
parentElement.append(newElement);

// createTextNode
var forTextNode = document.createTextNode('This is a TEXTNODE!');
newElement.appendChild(forTextNode);

// classList add
function twoOCFunction() {
    document.getElementById('lastDiv').classList.add('styleDiv');
}

// classList remove
// classList toggle