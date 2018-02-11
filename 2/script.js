if (localStorage.style) {
	document.querySelector('#changeStyle').setAttribute('href', localStorage.style);
}
const setStyle = (bu) => {
	localStorage.setItem('style', bu.target.getAttribute('data-value'));
	document.querySelector('#changeStyle').setAttribute('href', localStorage.style);
}
let buttons = Array.from(document.querySelectorAll('.style-setter'));
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', setStyle);
}