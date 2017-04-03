/**
 * Created by Administrator on 2017/4/2.
 */
var i=0;
var minsize=5;
var maxsize=50;
var f=200;//产生雪片的频率，单位是ms，所以2s产生一个，这个参数越小雪越密
var flakeColor="#fff";
//每个雪片就是一个div！  所以创建雪片对象
var flake=$("<div></div>").css({"position":"absolute","top":"-50px","color":"#fff"}).html("❄");//html可以设置标签的内容,,"backgroundcolor":"rgba(0,0,0,0)"
                                                                                              // 人民币太大，怎么搞小？
                                                                                              // 在img的里面直接设置style的宽度弄小！！！~~~
                                                                                              // ~.html("<img src='../layer/renminbi.png' style='width: 100px'/>")
//需要的5个随机数
// 1.初始时，相对于浏览器左边的位置是随机的
// 2.雪片的下降速度
// 3.大小
// 4.落地的位置，即落地时相对于浏览器左边的激励
// 3.透明度

$(function(){
    lunbo();
    var documentHeight=$(document).height();
    var documentWidth=$(document).width();
    //这里也是间隔多久产生一个啊！！！用setInterval啊啊啊啊！笨
    setInterval(function(){
        var startPositionLeft=Math.random()*documentWidth;//*100干什么，random就可以当比例来用啊，所以*浏览器宽度啊啊啊啊
        var startOpacity=0.7+Math.random()*0.3;//透明度，需要越来越小，一开始设置为0.7，随意设的
                                                //为什么*0.3;为了让它不大于1，不让他完全透明
        var endPositionTop=documentHeight;
        var endPositionLeft=Math.random()*documentWidth;
        var durationFall=4000+Math.random()*3000;//下降的速度,不能太小，至少4s，所以基数是4000，所以这里完了一共飘的时间是2~5s
        var sizeFlake=minsize+Math.random()*maxsize;
        flake.clone().appendTo("body").css({
            "left":startPositionLeft,  //初始状态
            "opacity":startOpacity,
            "font-size":sizeFlake,
            "color":flakeColor
        }).animate({
            "top":endPositionTop,   //终状态
            "left":endPositionLeft,
            "opacity":0.5
        },durationFall,function(){$(this).remove()}); //从最上面跑到下面是什么，是一个动画了啊！{**}里面是目的样式,
                                       // 这里的function是回调函数，就是说当到达目的样式之后，执行这个函数！！，删除当前对象，
                                       // 一用remove（），
                                       // 二用回调函数！
    },f);//间隔0.2s产生一个，！！！间隔0.2s就克隆一份flake对象放到页面中！！！
});
function lunbo(){
    $(".ig").eq(0).show().siblings().hide();
    setInterval(function(){
        i++;
        if(i===7){
            i=0;
        }
        $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    },2000);
}