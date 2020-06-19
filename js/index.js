(function () {//代码块
    var clock  = document.getElementsByClassName('clock')[0];
        
    window.onload = function(){
        clock.classList.add('init');//给clock添加类名
        getClock();
        //定时刷新页面  重新再来7天
        setInterval(function(){
            window.location.reload();
        },200000)


    }

    function getClock() {

        var hoursNode = document.getElementsByClassName('hours')[0],
            minuteNode = document.getElementsByClassName('minute')[0],
            secondNode = document.getElementsByClassName('second')[0];

        var date = new Date();//创建一个date对象 
        var h = date.getHours();//获得当前的时间的小时24小时制
        h = h > 12 ? (h - 12) : h;//变成12小时
        var min = date.getMinutes();//获取当前时间的分钟
        var sec = date.getSeconds();//获取当前时间的秒数

        console.log(h, min, sec)
        //把刚才h，min，sec  转化成 deg

        //分针对应的走过时间，让时针走多少x？
        // 30/360 = x/min*6
        // 360*x = min*6*30   x = 时针的偏移量
        var x = (min*6*30)/360;

        var sec_deg = sec*6;//秒针的度数
        var min_deg = min*6;//分针的度数

        var h_deg  = h*30 + x ;//时针的度数

        //对应的角度转化dom
        hoursNode.style.transform = 'rotate('+  h_deg +'deg)';
        minuteNode.style.transform = 'rotate('+  min_deg +'deg)';
        secondNode.style.transform = 'rotate('+  sec_deg +'deg)';

    }
   

/** 
 *  js jq vue react es6+ 脚手架 webpack 包管理  babel
 *   nodejs 
 *  2012-2013年 
 *  h5 css3  ---前端 ---移动端 
 * m
 *  后端前移动 中间层   mvc mvvm --- angular    vue  react 
 * 
 * 2014-5 
 * es6  nodejs----js  cmd  amd 
 * --- 试图 ---后端 api  
 *  优势：nodejs 特别适合io密集型操作 
 * 高并发的处理 
 * 
 * 5天集训营   达标免费   反 90元  10 
 *   
 * 
 */







})()

