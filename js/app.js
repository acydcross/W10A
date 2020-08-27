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
var sponge = document.getElementById('image');
sponge.setAttribute('src', "https://m.media-amazon.com/images/M/MV5BNDUwNjBkMmUtZjM2My00NmM4LTlmOWQtNWE5YTdmN2Y2MTgxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_UX477_CR0,0,477,268_AL_.jpg");
sponge.classList.add('on-image');
sponge.classList.remove('off-image');

// classList remove
// classList toggle