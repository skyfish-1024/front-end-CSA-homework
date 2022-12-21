var imgs = document.querySelectorAll(".picture img")
var marks = document.querySelectorAll(".mark div")
var pre = document.querySelector(".pre")
var next = document.querySelector(".next")
console.log(pre, next)
var picture = ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed5b4c0f1853e63df778a7f6699830ea.jpg?thumb=1&w=1501&h=563&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84fee43ad578f9d04045e35a30e9d549.jpg?w=2452&h=920",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10835a42ae34de769b741a8617660baf.jpg?thumb=1&w=1501&h=563&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/254c8ac07bdd4355f277915183103ced.jpg?thumb=1&w=1501&h=563&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c162874708ca7856f972ef5eee976e3a.jpg?thumb=1&w=1501&h=563&f=webp&q=90",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c5df75f59c091e049da6503123959bd.jpg?thumb=1&w=1501&h=563&f=webp&q=90"]
var flag = 0;
//轮播函数
function swiper() {
    for (var i = 0; i < 6; i++) {
        if (i != flag) {
            imgs[i].style.opacity = "0"
        }
        marks[i].style.backgroundColor = "#424242"
    }
    if (flag == 5) {
        flag = 0
    } else {
        flag++
    }
    imgs[5 - flag].style.opacity = "1"
    marks[flag].style.backgroundColor = "#fff"
}
var swiperID = setInterval(swiper, 5000)
//下一个轮播图
function swiperNext() {
    clearInterval(swiperID)
    swiper()
    swiperID = setInterval(swiper, 5000)
}
// 上一个轮播图
function swiperBack() {
    clearInterval(swiperID)
    for (var i = 0; i < 6; i++) {
        if (i != flag) {
            imgs[i].style.opacity = "0"
        }
        marks[i].style.backgroundColor = "#424242"
    }
    if (flag == 0) {
        flag = 5
    } else {
        flag--
    }
    imgs[5 - flag].style.opacity = "1"
    marks[flag].style.backgroundColor = "#fff"
    swiperID = setInterval(swiper, 5000)
}

pre.addEventListener("click", swiperBack)
next.addEventListener("click", swiperNext)
// swiper(false)
