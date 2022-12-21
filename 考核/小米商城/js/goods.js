// import "./jquery-3.5.1/jquery-3.5.1"
class Goods {
    constructor(title, desc, price, price_del, picture) {
        this.title = title
        this.desc = desc
        this.price = price
        this.price_del = price_del
        this.picture = picture
    }
}

class poster {
    constructor(title, picture, a) {
        this.title = title
        this.picture = picture
        this.a = a
    }
}
var data1 = [
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011906_e7f02b803d3da16ec56a611e790243ba.png?thumb=1&w=316&h=316&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205240036_9a8fbf274c0d419c5a0a49ef67cdd7c8.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211419_626e47d8843927a9b719b9360d2b78dd.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011906_e7f02b803d3da16ec56a611e790243ba.png?thumb=1&w=316&h=316&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205240036_9a8fbf274c0d419c5a0a49ef67cdd7c8.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211419_626e47d8843927a9b719b9360d2b78dd.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011906_e7f02b803d3da16ec56a611e790243ba.png?thumb=1&w=316&h=316&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205240036_9a8fbf274c0d419c5a0a49ef67cdd7c8.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204211419_626e47d8843927a9b719b9360d2b78dd.png?thumb=1&w=353&h=353&f=webp&q=90`)
]
var data2 = [
    new Goods("Redmi Buds 1", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 2", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 3", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205241527_fb27e27e6587254da27de5ba9c889512.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 1", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 2", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 3", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205241527_fb27e27e6587254da27de5ba9c889512.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 1", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 2", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 3", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205241527_fb27e27e6587254da27de5ba9c889512.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 1", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 2", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg?thumb=1&w=353&h=353&f=webp&q=90`),
    new Goods("Redmi Buds 3", "35dB 智能主动降噪 | AI 通话降噪 | 30小时超长续航", 199, 299, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205241527_fb27e27e6587254da27de5ba9c889512.png?thumb=1&w=353&h=353&f=webp&q=90`),
]
var data3 = [
    new Goods("Xiaomi 13 限量定制色", "Xiaomi 13 限量定制色", 499, 0, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211292351_92aba2c69123166a74ba2e2b525b1ae2.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi Note 12 Pro+", "2亿超清防抖相机｜OLED 柔性直屏", 2099, 2199, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210262024_83bfd34bb3f733d69d342acaf34aea58.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi K50", "2K直屏的狠旗舰", 2099, 2399, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c14106b688ac7ae88e761564789b37.jpg?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Xiaomi 13 限量定制色", "Xiaomi 13 限量定制色", 499, 0, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211292351_92aba2c69123166a74ba2e2b525b1ae2.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi Note 12 Pro+", "2亿超清防抖相机｜OLED 柔性直屏", 2099, 2199, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210262024_83bfd34bb3f733d69d342acaf34aea58.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi K50", "2K直屏的狠旗舰", 2099, 2399, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c14106b688ac7ae88e761564789b37.jpg?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Xiaomi 13 限量定制色", "Xiaomi 13 限量定制色", 499, 0, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211292351_92aba2c69123166a74ba2e2b525b1ae2.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi Note 12 Pro+", "2亿超清防抖相机｜OLED 柔性直屏", 2099, 2199, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210262024_83bfd34bb3f733d69d342acaf34aea58.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi K50", "2K直屏的狠旗舰", 2099, 2399, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c14106b688ac7ae88e761564789b37.jpg?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Xiaomi 13 限量定制色", "Xiaomi 13 限量定制色", 499, 0, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211292351_92aba2c69123166a74ba2e2b525b1ae2.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi Note 12 Pro+", "2亿超清防抖相机｜OLED 柔性直屏", 2099, 2199, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210262024_83bfd34bb3f733d69d342acaf34aea58.png?thumb=1&w=279&h=279&f=webp&q=90`),
    new Goods("Redmi K50", "2K直屏的狠旗舰", 2099, 2399, `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c14106b688ac7ae88e761564789b37.jpg?thumb=1&w=279&h=279&f=webp&q=90`),

]

// for (let i = 0; i < 9; i++) {
//     data[i] = new Goods("小米手环", "全彩方形大屏 | 独立GPS定位 | 多重健康监测", 369, 399, `https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011906_e7f02b803d3da16ec56a611e790243ba.png?thumb=1&w=316&h=316&f=webp&q=90`)
// }
var poster1 = new poster("家电", `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37973c4bedc27bae38e1b1758ed4b318.png?thumb=1&w=327&h=419&f=webp&q=90`, "#")
var poster2 = new poster("电脑", `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=327&h=419&f=webp&q=90`, "#")
var poster3 = new poster("手机", `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dac48a895b8b9f44bbd5317f85ccdaca.jpg?thumb=1&w=327&h=857&f=webp&q=90`, "#")
var d = {
    header: {
        title: "智能穿戴",
        category: ["手环", "耳机"]
    },
    body: {
        poster: [poster1, poster2],
        goods: [data1, data2]
    }
}
var p = {
    header: {
        title: "手机",
        category: ["查看更多"]
    },
    body: {
        poster: [poster3],
        goods: [data3]
    }
}
//goods-show-header部分
//展示页面的头部渲染
function renderHeader(header) {
    // var goods_show_body = $("<div></div>").addClass("goods-show")
    var head = $("<div></div>").addClass("goods-show-header")
    var title = $("<h2></h2>").addClass("title").text(header.title)
    var more = $("<div></div>").addClass("more")
    var ul = $("<ul></ul>").addClass("more-list")
    if (header.category.length < 2) {
        var a = $("<a></a>").text(header.category[0])
        var i = $("<i></i>").addClass("iconfont icon-jiantouyou")
        a.append(i)
        ul.append(a)
    } else {
        var length = header.category.length
        for (let i = 0; i < header.category.length; i++) {
            let li = $("<li></li>").text(header.category[i])
            ul.append(li)
        }
        ul.children().eq(0).addClass("more-active")
    }
    more.append(ul)
    head.append(title)
    head.append(more)
    return head
}

//goods-show-body部分
//展示页面的body渲染
function renderBody(data) {
    var body = data.body
    var bodyDiv = $("<div></div>").addClass("goods-show-body")
    var box1 = $("<div></div>").addClass("box1")
    var ul_1 = $("<ul></ul>").addClass("box1-list")
    if (body.poster.length < 2) {
        var li_1 = $("<li></li>").addClass("item-p-l")
        var a_1 = $("<a></a>")
        var img_1 = $(`<img src=${body.poster[0].picture}>`)
        a_1.append(img_1)
        li_1.append(a_1)
        ul_1.append(li_1)
    } else {
        for (let i = 0; i < 2; i++) {
            var li_1 = $("<li></li>").addClass("item-p-m")
            var a_1 = $("<a></a>")
            var img_1 = $(`<img src=${body.poster[i].picture}>`)
            a_1.append(img_1)
            li_1.append(a_1)
            ul_1.append(li_1)

        }
    }
    box1.append(ul_1)

    var box2 = $("<div></div>").addClass("box2")

    for (let i = 0; i < body.goods.length; i++) {
        var ul_2 = $("<ul></ul>").addClass("box2-list")
        var li_2, a_2, img_2, h3_2, p1_2, p2_2
        for (let j = 0; j < body.goods[i].length && j < 7; j++) {
            li_2 = $("<li></li>").addClass("item-m")
            a_2 = $("<a></a>")
            img_2 = $(`<img src=${body.goods[i][j].picture}>`)
            h3_2 = $("<h3></h3>").addClass("item-title").text(body.goods[i][j].title)
            p1_2 = $("<p></p>").addClass("desc").text(body.goods[i][j].desc)
            p2_2 = $("<p></p>").addClass("price").html(`<span class="num">${body.goods[i][j].price}</span>元<del><span class="num">${body.goods[i][j].price_del}</span>元</del>`)
            a_2.append(img_2).append(h3_2).append(p1_2).append(p2_2)
            li_2.append(a_2)
            ul_2.append(li_2)
        }
        var last = body.goods[i].length - 1
        li_2 = $("<li></li>").addClass("item-s")
        a_2 = $("<a></a>")
        img_2 = $(`<img src=${body.goods[i][last].picture}>`)
        h3_2 = $("<h3></h3>").addClass("item-title").text(body.goods[i][last].title)
        p2_2 = $("<p></p>").addClass("price").html(`<span class="num">${body.goods[i][last].price}</span>元`)
        a_2.append(img_2).append(h3_2).append(p2_2)
        li_2.append(a_2)
        ul_2.append(li_2)


        li_2 = $("<li></li>").addClass("item-s")
        a_2 = $("<a></a>")
        var div = $("<div></div>").addClass("figure")
        h3_1 = $("<h3></h3>").addClass("item-more").text("浏览更多")
        var h3_3 = $("<h3></h3>").addClass("item-more-title").text(data.header.category[i])
        var i_2 = $("<i></i>").addClass("iconfont icon-jiantouyou")
        h3_1.append(h3_3)
        div.append(h3_1).append(i_2)
        a_2.append(div)
        li_2.append(a_2)
        ul_2.append(li_2)
        box2.append(ul_2)
    }

    box2.children().eq(0).siblings().addClass("hide")

    bodyDiv.append(box1).append(box2)
    return bodyDiv
}
function render(data) {
    var container = $(".goods .container")
    var goods_show = $("<div></div>").addClass("goods-show")
    var goods_show_body = $("<div></div>").addClass("goods-show_body")
    var header = renderHeader(data.header)
    var body = renderBody(data)
    console.log(header, body)
    goods_show_body.append(header).append(body)
    goods_show.append(goods_show_body)
    container.append(goods_show)
}

render(p)
render(d)
render(d)

$(".more-list").on("click", "li", function (e) {
    $(e.target).addClass("more-active").siblings().removeClass("more-active")
    var index = $(e.target).index()
    console.log(index)
    $(e.target).parent().parent().parent().siblings().eq(0).children().eq(1).children().eq(index).removeClass("hide").siblings().addClass("hide")
})

$(".more-list").on("mouseenter", "li", function (e) {
    console.log("mouseenter")
    $(e.target).addClass("more-active").siblings().removeClass("more-active")
    var index = $(e.target).index()
    $(e.target).parent().parent().parent().siblings().eq(0).children().eq(1).children().eq(index).removeClass("hide").siblings().addClass("hide")
})