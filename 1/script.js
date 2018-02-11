if (window.localStorage) {
	console.log('localStorage works!');
} else {
	console.log('your browser does not support localStorage...');
}

//or 

if (localStorage) {
	console.log('localStorage works!');
} else {
	console.log('your browser does not support localStorage...');
}

//or 

if (typeof(localStorage) !== "undefined") {
	console.log('localStorage works!');
} else {
	console.log('your browser does not support localStorage...');
}