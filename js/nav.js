document.getElementById('kategorier').addEventListener('click', function () {
    toggleClass(document.getElementById('dropdown-content'), "active")
});

document.getElementById('skicka').addEventListener('click', function () {
    toggleClass(document.getElementById('tack'), "active")
});

document.getElementById('skicka').addEventListener('click', function () {
    toggleClass(document.getElementById('tips'), "active")
});

document.getElementById('skicka').addEventListener('click', function () {
    toggleClass(document.getElementById('skicka'), "active")
});



/**
 * Function to toggle the given class (className) on the given element (element)
 * From: http://jsfiddle.net/4MBQa/
*/
function toggleClass(element, className) {
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    } else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString; 
    }