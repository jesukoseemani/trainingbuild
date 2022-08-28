const accordion = document.querySelectorAll('.container');
const menu = document.querySelector('.hamburger');
const hamburger = document.querySelector('.Hero_hanburger');
const times = document.querySelector('.hamburger_top_p');

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}

hamburger.addEventListener('click', () => {
	menu.classList.toggle('activate');
});

times.addEventListener('click', () => {
	menu.classList.toggle('activate');
});

document.querySelectorAll('.hamburger_middle_list').forEach((list) => list.addEventListener('click', () => {
   menu.classList.toggle('activate');
}))
