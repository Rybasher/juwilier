let burger=document.querySelector(".menu__icon"),menu=document.querySelector(".menu__list");burger.addEventListener("click",(function(){burger.classList.toggle("_active"),menu.classList.toggle("_active"),document.querySelector("body").classList.toggle("lock")})),console.log("asdasd");let menuArrows=document.querySelectorAll(".menu__arrow");if(menuArrows.length>0)for(let e=0;e<menuArrows.length;e++){const t=menuArrows[e];t.addEventListener("click",(function(){t.parentElement.classList.toggle("_active")}))}let scroll_butt=document.querySelector(".scroll-top");console.log("scrolled"),window.addEventListener("scroll",(function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?scroll_butt.classList.add("show"):scroll_butt.classList.remove("show")}));const main_swiper=new Swiper(".swiper-container",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let modal=document.getElementById("modal"),btn=document.getElementById("open-modal"),span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.classList.toggle("open"),document.querySelector("body").classList.toggle("lock")},window.onclick=function(e){e.target==modal&&(modal.classList.remove("open"),document.querySelector("body").classList.remove("lock"))};let toggle_map=document.querySelector(".toggle-map"),map_wrapper=document.querySelector(".map-wrapper");toggle_map.addEventListener("click",(function(){map_wrapper.classList.toggle("open")}));let tab_buttons=document.querySelectorAll(".tab__button"),tabs=document.querySelectorAll(".address-items");for(let e=0;e<tab_buttons.length;e++){const t=tab_buttons[e];t.addEventListener("click",(function(){for(let e=0;e<tabs.length;e++){const o=tabs[e];t.id==o.id?o.classList.add("open"):o.classList.remove("open")}}))}function initMap(){var e=new google.maps.LatLng(52.509963046225266,13.27073815343326),t=new google.maps.LatLng(52.509963046225266,13.27073815343326),o={zoom:15,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP},n={zoom:15,center:t,mapTypeId:google.maps.MapTypeId.ROADMAP};new google.maps.Map(document.getElementById("map"),o),new google.maps.Map(document.getElementById("map2"),n)}google.maps.event.addDomListener(window,"load",initialize);