const navBtn = document.querySelector(".nav_btn")
const mobileNavMenu = document.querySelector(".mobile__nav__menu")
const likeIconActive = document.querySelectorAll(".place__like-icon")
const refreshPage = document.querySelector(".app__logo")
// انتخاب کانتینر
const container = document.getElementById('container');
// for navigation responsive
let navBtnOpen = false;
navBtn.addEventListener("click", function () {
    if (navBtnOpen) {
        navBtn.classList.remove("nav_btn--open")
        mobileNavMenu.classList.remove("mobile__nav__menu--open")
        navBtnOpen = false
    } else {
        navBtn.classList.add("nav_btn--open")
        mobileNavMenu.classList.add("mobile__nav__menu--open")
        navBtnOpen = true
    }
});
// like and remoe like icon
likeIconActive.forEach(function (likeIconActive) {
    let IconLiked = false;
    likeIconActive.addEventListener("click", function () {
        if (IconLiked) {
            likeIconActive.classList.remove("like_icon_active_liked");
            IconLiked = false;
        } else {
            likeIconActive.classList.add("like_icon_active_liked");
            IconLiked = true;
        }
    });
});

// refresh page
refreshPage.addEventListener("click", ()=> {
    location.reload();
})
// تنظیم عرض کانتینر به اندازه عرض صفحه وب
function adjustContainerWidth() {
    container.style.width = window.innerWidth + 'px';
}

// فراخوانی تابع هنگام بارگذاری صفحه
window.onload = adjustContainerWidth;

// فراخوانی تابع هنگام تغییر اندازه صفحه
window.onresize = adjustContainerWidth;
