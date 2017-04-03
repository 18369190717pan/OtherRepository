/**
 * Created by Administrator on 2017/4/1.
 */
$(function(){
    $(".pic ul li").mouseover(function(){
        $(this).stop(true).animate({width:"600px"},1000).siblings().stop(true).animate({width:"100px"},500);          //animate()是动画效果的意思,在1000ms之内从100px变成600px
    });           // animate()动画的第一个参数是   目的样式  ！用{}和css写法一样，因为就是在设置css样式啊
});
// 上面animate()动画中是隔1s才到达目的样式，但是可能用户一秒内就换到别的了，所以要对正在运行中的做一个处理
//这要用到stop（）方法，stop（true）一个true时就在当前状态暂停一下，然后回复原来状态
                      //stop（true,true）2个true时就立马到原来状态
//这用一个的,两个的有一种闪的感觉，太快了，生硬，没有平滑的过度效果

//这里用stop（）也不只是为了平滑，而是不用的话连续放到几个上，这几个都伸长，会换行，
// 用了stop（）之后，不被放的在缩短恢复原来的状态，放的在伸长.
//这个时候就不至于太长而换行了！！！！！！！！！！！！

