// scripts.js
document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.t-menuburger');
	if (burger) {
		burger.addEventListener('click', function () {
			this.classList.toggle('t-menuburger-opened');
		});
	}
});
