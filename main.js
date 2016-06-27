// factorial

function factorial(x) {
	if (x === 1) {
	return 1;
	} else {
		var tmp = x;
		tmp = x * factorial(x - 1);
	}
	return tmp;
}
// console.log(factorial(6));
console.assert(factorial(5) === 120);
console.assert(factorial(10) === 3628800);

// WALK THE DOM
// Exercise 2
// Exercise 2.1

function walkTheDOM(parent, cb) { //cb --> callback()
	cb(parent);
	for (var i = 0; i < parent.children.length; i++) {
		walkTheDOM(parent.children[i], cb);
	}
}

// getting element by id


// Exercise 2.2
function findElementById(parent, id) {
	var result;

	walkTheDOM(parent, function(x) {
		if (x.id === id && !result) {
			result = x;
		}
	});
	return result;
}

console.assert(findElementById(document, "two") === document.getElementById("two"));
console.assert(findElementById(document, "one") === document.getElementById("one"));

// Exercise 2.3

function findElementsByTagName(parent, tagName) {
	var result = [];

	walkTheDOM(parent, function(x) {
		if (x.tagName === tagName) {
			result.push(x);
		}
	});
	return result;
}

console.assert(findElementsByTagName(document.body, "DIV").length === 3);
console.assert(findElementsByTagName(document.head, "DIV").length === 0);

// Exercise 2.4
// Write a function called findElementsByClassName that uses walkTheDOM to return an array of a node's descendants that have a set of specific class names.

// The function should take a starting node as the first argument followed by a variable number of class names (strings).

//The function should return an array of elements.


// The elements in the resulting array should have all of the class names that were specified, not just one.

function findElementsByClassName(parent) {
	var args = arguments;
   	var result = [];

 	walkTheDOM(parent, function(x) {
        for (var i = 1; i < args.length; i++) {
            if (!x.classList.contains(args[i])) {
           	return;
            }
        }
        result.push(x);
    })
    return result;
}

console.assert(findElementsByClassName(document.body, "red").length === 2);
console.assert(findElementsByClassName(document.body, "white").length === 1);
