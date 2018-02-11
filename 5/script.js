if (localStorage.length < 1) {
	localStorage.setItem('name', 'Bender');
	localStorage.setItem('lastName', 'Rodriguez');
	localStorage.setItem('age', '4');
	localStorage.setItem('type', 'robot');
	localStorage.setItem('key', '333');
}

let res = '';

for (let i = 0; i < localStorage.length; i++) {
	res += `${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))}<br>`;
}

document.querySelector('output').innerHTML = res;