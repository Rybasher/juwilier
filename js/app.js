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




const main_swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
let modal = document.getElementById("modal");
let btn = document.getElementById("open-modal");
let mob_tap_wrapper = document.querySelector(".mobile-tab__wrapper");
let close = document.querySelector(".tabs__close");
let close_mob = document.querySelector(".close-mob-butt");
let open_mob = document.querySelector('.tabs__mobile-map');
let body = document.querySelector('body');



close.addEventListener('click', function () {
	modal.classList.remove('open');
})

btn.onclick = function () {
	modal.classList.toggle('open')
	document.querySelector(".menu__list").classList.remove("_active");
	document.querySelector('.menu__icon').classList.remove('_active')


}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.classList.remove('open')
		body.classList.remove('lock');

	}
}

let toggle_map = document.querySelector('.toggle-map');
let map_wrapper = document.querySelector('.map-wrapper')

toggle_map.addEventListener('click', function () {
	map_wrapper.classList.toggle("open");
})


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


let tab_buttons = document.querySelectorAll('.tab__button');
let tabs = document.querySelectorAll('.address-items');
let maps = document.querySelectorAll('.modal-map');

for (let i = 0; i < tab_buttons.length; i++) {
	const but_elem = tab_buttons[i];
	but_elem.addEventListener('click', function () {
		for (let c = 0; c < tab_buttons.length; c++) {
			const but = tab_buttons[c];
			but.classList.remove('closed');
		}
		for (let j = 0; j < tabs.length; j++) {
			const tab_elem = tabs[j];
			if (but_elem.id == tab_elem.dataset.id) {
				tab_elem.classList.add("open-tab");
				but_elem.classList.add('closed');
			}
			else {
				tab_elem.classList.remove("open-tab");
			}
		}
		for (let map = 0; map < maps.length; map++) {
			maps[map].classList.remove('open-map');
			let open_tab = document.querySelector('.open-tab');
			if (open_tab.dataset.id == maps[map].dataset.map) {
				maps[map].classList.add('open-map');
			}
			else {
				maps[map].classList.remove('open-map');

			}
		}
	})
}



function loadScript() {
	let script = document.querySelector('.map-loader-script')

	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiNgZ7OOEmFEsphbyZ4Z-8N3FE9mRrYGo&' + 'callback=initMap';
	script.classList.add("loaded");
}
// window.addEventListener("DOMContentLoaded", loadScript);

let map1 = document.querySelector("#map");
let map2 = document.querySelector("#map2");
let btn_maps = document.querySelector('#open-modal');

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


function initMap() {
	let map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 52.509963046225266, lng: 13.27073815343326 },
		zoom: 12,
	});
	let map2 = new google.maps.Map(document.getElementById("map2"), {
		center: { lat: 52.5328447, lng: 13.1950684 },

		zoom: 15,
	});
	let modal_map = new google.maps.Map(document.getElementById("modal-map"), {
		center: { lat: 52.509963046225266, lng: 13.27073815343326 },
		zoom: 16,
	});
	let modal_map2 = new google.maps.Map(document.getElementById("modal-map2"), {
		center: { lat: 52.5328447, lng: 13.1950684 },
		zoom: 16,
	});
	let modal_map3 = new google.maps.Map(document.getElementById("modal-map3"), {
		center: { lat: 48.1945961, lng: 16.3845929 },
		zoom: 16,
	});
}



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