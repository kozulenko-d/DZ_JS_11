const arr = [1, 2, 4, 6];

if (!localStorage.ourArray) {
	localStorage.setItem('ourArray', JSON.stringify(arr));
}
document.querySelector('p').innerHTML = JSON.parse(localStorage.ourArray);