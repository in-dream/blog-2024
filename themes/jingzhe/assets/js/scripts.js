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
window.onscroll=function(){(document.body.scrollTop>500||document.documentElement.scrollTop>500)?document.getElementById("gotop").style.display="block":document.getElementById("gotop").style.display="none"};function smoothScrollTop(){var e=null;cancelAnimationFrame(e),e=requestAnimationFrame(function n(){var o=document.body.scrollTop||document.documentElement.scrollTop;o>0?(document.body.scrollTop=document.documentElement.scrollTop=o-150,e=requestAnimationFrame(n)):cancelAnimationFrame(e)})}

// 灯箱调用(首页顶部/Memos页面)
window.ViewImage && ViewImage.init('.photo-home a, .datacont img, .content_zhengwen img, .top-img');

// 导航自动隐藏及显示
const e=document.querySelector(".header-background"),t=window.scrollY,a=200,n=100;let o=0,r=t;window.addEventListener("scroll",()=>{const t=window.scrollY;t>r&&t>a?e.classList.add("hidden"):t<r&&(o+=r-t,o>n&&(e.classList.remove("hidden"),o=0)),r=t})

// 页面下滑加载动画
function animateSummaries() {
  const articles = document.querySelectorAll('.img-hide');

  function animate(article) {
    article.classList.add('fade-in-up'); /* 添加 fade-in-up 类名 */
  }

  const options = {
    rootMargin: '0px 0px -60px 0px', // 元素进入视窗 100px 时触发回调
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
      }
    });
  }, options);

  articles.forEach((article) => {
    observer.observe(article);
  });
}

animateSummaries();