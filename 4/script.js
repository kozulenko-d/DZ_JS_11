if (!localStorage.popupInfo) {
	const arrClose = Array.from(document.querySelectorAll('.popup span, #try-again'));
	const popup = () => document.querySelector('.popup').classList.add('show');
	const popping = setTimeout(popup, 4000);
	const clientAgree = () => {
		localStorage.setItem('popupInfo', 'bought');
		clearTimeout(popping);
	};
	const closePopup = () => {
		document.querySelector('.popup').classList.remove('show');
		clearTimeout(popping);
	}
	document.querySelector('#agree').addEventListener('click', clientAgree);
	for (let i = 0; i < arrClose.length; i++) {
		arrClose[i].addEventListener('click', closePopup);
	}
}