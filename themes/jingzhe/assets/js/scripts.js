var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}
// 回到顶部
window.onscroll = function() {scrollTopButton()};

function scrollTopButton() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("gotop").style.display = "block";
  } else {
    document.getElementById("gotop").style.display = "none";
  }
}
function smoothScrollTop(){
    var timer  = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 150;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
}
// 灯箱调用(首页顶部/Memos页面)
window.ViewImage && ViewImage.init('.photo-home a, .datacont img, .content_zhengwen img, .top-img');

const nav = document.querySelector('.header-background');
let lastScrollTop = 0;
let initialScrollTop = window.scrollY;
let scrollUpDistance = 0;
const SCROLL_DISTANCE_DOWN = 200; // 向下滑动距离
const SCROLL_DISTANCE_UP = 100; // 向上滑动距离

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop && scrollTop > SCROLL_DISTANCE_DOWN) {
    nav.classList.add('hidden');
  } else if (scrollTop < lastScrollTop) {
    scrollUpDistance += lastScrollTop - scrollTop;
    if (scrollUpDistance > SCROLL_DISTANCE_UP) {
      nav.classList.remove('hidden');
      scrollUpDistance = 0;
    }
  } else {
    scrollUpDistance = 0;
    nav.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});