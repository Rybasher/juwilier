// HEADER SCRIPTS

let burger = document.querySelector(".menu__icon");
let menu = document.querySelector('.menu__list');


burger.addEventListener('click', function () {
	burger.classList.toggle('_active');
	menu.classList.toggle('_active');
	document.querySelector('body').classList.toggle('lock');
})

console.log("asdasd");


let menuArrows = document.querySelectorAll('.menu__arrow');
if (menuArrows.length > 0) {
	for (let index = 0; index < menuArrows.length; index++) {
		const menuArrow = menuArrows[index];
		menuArrow.addEventListener('click', function () {
			menuArrow.parentElement.classList.toggle('_active');
			// console.log(menuArrow.parentElement);
		})
	}
}
let scroll_butt = document.querySelector('.scroll-top');

window.addEventListener('scroll', function () {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		scroll_butt.classList.add('show');
	} else {
		scroll_butt.classList.remove('show');

	}
})
// HEADER SCRIPTS

// SWIPER


const main_swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
// SWIPER



// MODAL


// все переменные с которыми идёт работа
let modal = document.getElementById("modal");
let btn = document.getElementById("open-modal");
let mob_tap_wrapper = document.querySelector(".mobile-tab__wrapper");
let close = document.querySelector(".tabs__close");
let close_mob = document.querySelector(".close-mob-butt");
let open_mob = document.querySelector('.tabs__mobile-map');
let body = document.querySelector('body');
let toggle_map = document.querySelector('.toggle-map');
let map_wrapper = document.querySelector('.map-wrapper')
let tab_buttons = document.querySelectorAll('.tab__button');
let tabs = document.querySelectorAll('.address-items');
let maps = document.querySelectorAll('.modal-map');

// закрытие модального окна 
close.addEventListener('click', function () {
	modal.classList.remove('open');
})


// клик на бирюзовую кнопку открывает и закрывает модалку. При клике убирается класс _active  у меню
btn.onclick = function () {
	modal.classList.toggle('open')
	document.querySelector(".menu__list").classList.remove("_active");
	document.querySelector('.menu__icon').classList.remove('_active')


}
// При клике на пустое место закрытие модалки
window.onclick = function (event) {
	if (event.target == modal) {
		modal.classList.remove('open')
		body.classList.remove('lock');

	}
}

// Открытие блока карт при клике на кнопку в модалке
toggle_map.addEventListener('click', function () {
	map_wrapper.classList.toggle("open");
})

// мобильная клавиша открытия блока карт в модалке
open_mob.addEventListener('click', function () {
	map_wrapper.classList.toggle("open");
	document.querySelector('.modal-content').classList.toggle("open-content");
	open_mob.classList.toggle("_active");
	mob_tap_wrapper.classList.toggle("_active");

})
close_mob.addEventListener('click', function () {
	modal.classList.remove('open');
	body.classList.remove('lock');

})

// Переключение карт по клику на кнопки
for (let i = 0; i < tab_buttons.length; i++) {
	// Прохидмся циклом по всем кнопкам
	const but_elem = tab_buttons[i]; // текущей кнопке присваиваем переменную but_elem

	but_elem.addEventListener('click', function () {
		// При клике на эту кнопку запускаем цикл который скрывает все кнопки
		for (let c = 0; c < tab_buttons.length; c++) {
			const but = tab_buttons[c];
			but.classList.remove('closed');
		}
		// После запускаем цикл проверки
		for (let j = 0; j < tabs.length; j++) {
			const tab_elem = tabs[j];
			// проходимся по всем табам с информацией
			if (but_elem.id == tab_elem.dataset.id) {
				// если data-id у таба с инфой равна id кнопки 
				tab_elem.classList.add("open-tab"); //добавляем табу класс open-tab
				but_elem.classList.add('closed'); // добавляем cosed для кнопки		
			}
			else {
				// если нет то
				tab_elem.classList.remove("open-tab"); // удаляем с таба класс open-tab
			}
		}
		for (let map = 0; map < maps.length; map++) {
			// проходимся по всем картам
			maps[map].classList.remove('open-map'); // закрываем их для начала
			let open_tab = document.querySelector('.open-tab'); // получем открытый таб с инфой
			if (open_tab.dataset.id == maps[map].dataset.map) {
				// прверка, если data-id  у таба равна data-map у карты
				maps[map].classList.add('open-map'); // добавляем блоку с картой класс open-map и таким образом показываем
			}
			else {
				maps[map].classList.remove('open-map');

			}
		}
	})
}
// MODAL



// ЗАГРУЗКА карт
// в строку 
//  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiNgZ7OOEmFEsphbyZ4Z-8N3FE9mRrYGo&' + 'callback=initMap';
// js?key=вам апи ключ

function loadScript() {
	let script = document.querySelector('.map-loader-script')

	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiNgZ7OOEmFEsphbyZ4Z-8N3FE9mRrYGo&' + 'callback=initMap';
	script.classList.add("loaded");
}
// window.addEventListener("DOMContentLoaded", loadScript);

// Переменные с картами, для загрузки скрипта по клику

let map1 = document.querySelector("#map");
let map2 = document.querySelector("#map2");
let btn_maps = document.querySelector('#open-modal');


// Загрузка скрипа по клику на блок 
map1.addEventListener("click", function () {
	let scrt = document.querySelector('.map-loader-script');
	if (!scrt.classList.contains("loaded")) {
		loadScript();
	}
})
map2.addEventListener("click", function () {
	let scrt = document.querySelector('.map-loader-script');
	if (!scrt.classList.contains("loaded")) {
		loadScript();
	}
})
btn_maps.addEventListener("click", function () {
	let scrt = document.querySelector('.map-loader-script');
	if (!scrt.classList.contains("loaded")) {
		loadScript();
	}
})


// Инициализация карт
// вместо lat,lng - координаты
// cейчас координаты, которые на сайте
// map - map карты на главной странице
// modal-map - modal-map 3 карты в бирюзовой кнопке

function initMap() {
	let map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 52.509963046225266, lng: 13.27073815343326 },
		zoom: 15,
	});
	// инициализация маркера
	let marker1 = new google.maps.Marker({
		position: { lat: 52.509963046225266, lng: 13.27073815343326 },
		title: "Reichsstr. 107 14052 Berlin",
	});
	marker1.setMap(map); //подключение маркера к карте

	let map2 = new google.maps.Map(document.getElementById("map2"), {
		center: { lat: 52.5328447, lng: 13.1950684 },
		zoom: 15,
	});
	// инициализация маркера

	let marker2 = new google.maps.Marker({
		position: { lat: 52.5328447, lng: 13.1950684 },
		title: "Brunsbütteler Damm 3  13581 Berlin",
	});
	marker2.setMap(map2); //подключение маркера к карте

	let modal_map = new google.maps.Map(document.getElementById("modal-map"), {
		center: { lat: 52.509963046225266, lng: 13.27073815343326 },
		zoom: 16,
	});
	// инициализация маркера

	let marker_modal1 = new google.maps.Marker({
		position: { lat: 52.509963046225266, lng: 13.27073815343326 },
		title: "Brunsbütteler Damm 3  13581 Berlin",
	});
	marker_modal1.setMap(modal_map);//подключение маркера к карте

	let modal_map2 = new google.maps.Map(document.getElementById("modal-map2"), {
		center: { lat: 52.5328447, lng: 13.1950684 },
		zoom: 16,
	});
	// инициализация маркера

	let marker_modal2 = new google.maps.Marker({
		position: { lat: 52.5328447, lng: 13.1950684 },
		title: "Brunsbütteler Damm 3  13581 Berlin",
	});
	marker_modal2.setMap(modal_map2); //подключение маркера к карте

	let modal_map3 = new google.maps.Map(document.getElementById("modal-map3"), {
		center: { lat: 48.1945961, lng: 16.3845929 },
		zoom: 16,
	});
	// инициализация маркера

	let marker_modal3 = new google.maps.Marker({
		position: { lat: 48.1945961, lng: 16.3845929 },
		title: "Brunsbütteler Damm 3  13581 Berlin",
	});
	marker_modal3.setMap(modal_map3); //подключение маркера к карте
}

// Тут я делаю ленивую загрузку для фоток и видео

"use strict"

const lazy_imgs = document.querySelectorAll('img[data-src], source[data-srcset]');
const windowHeight = document.documentElement.clientHeight; //высота экрана браузера
const videoBlock = document.querySelector('.video');
let lazyImagesPozitions = [];

if (lazy_imgs.length > 0) {
	lazy_imgs.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPozitions.push(img.getBoundingClientRect().top + pageYOffset); //пушим положение изображений
			lazyScrollCheck();
		}
	});
};

window.addEventListener('scroll', lazyScroll);
function lazyScroll() {
	if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) {
		lazyScrollCheck();
	}
	if (!videoBlock.classList.contains("_loaded")) {
		getVideo();
	}
}
function lazyScrollCheck() {
	let imageIndex = lazyImagesPozitions.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (imageIndex >= 0) {
		if (lazy_imgs[imageIndex].dataset.src) {
			lazy_imgs[imageIndex].src = lazy_imgs[imageIndex].dataset.src;
			lazy_imgs[imageIndex].removeAttribute('data-src');
		} else if (lazy_imgs[imageIndex].dataset.src) {
			lazy_imgs[imageIndex].src = lazy_imgs[imageIndex].dataset.srcset;
			lazy_imgs[imageIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPozitions[imageIndex];
	}
}


function getVideo() {

	const loadVideoPos = videoBlock.getBoundingClientRect().top + pageYOffset;
	if (pageYOffset > loadVideoPos - windowHeight) {
		const loadVideoUrl = videoBlock.dataset.video;

		if (loadVideoUrl) {
			videoBlock.insertAdjacentHTML(
				"beforeend",
				`<iframe title="Juwelier &amp; Leihhaus aus Berlin" src="${loadVideoUrl}"
				class="video__iframe" frameborder="0"></iframe>`
			);
			videoBlock.classList.add("_loaded");
		}
	}

}