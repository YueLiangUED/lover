/**
 * Created by wangbiaozy on 2017/12/1.
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {
    var $xin_1 = $('#xin_1'),
        $xin_2 = $('#xin_2'),
        $xin_3 = $('#xin_3'),
        $info = $('#info'),
        $cgWrap = $('.cgWrap'),
        $title = $('#title'),
        $time = $('#time'),
        $barInner = $('.barInner'),
        $starBtn = $('#starBtn'),
        $girl_1 = $('#girl_1'),
        $watch = $('#watch'),
        $box = $('#box'),
        $tv = $('#tv'),
        $openTv = $('#openTv'),
        $num = $('#num'),
        flag = 0,
        $lev4Bg = $('#lev4Bg'),
        $sxt = $('#sxt'),
        $lev4 = $('#lev4'),
        $lev5Girl = $('#lev5Girl'),
        $lev5Man = $('#lev5Man'),
        $door = $('#door'),
        $tc1NextBtn = $('.tc1NextBtn'),
        $tc2NextBtn = $('.tc2NextBtn'),
        $tc3NextBtn = $('.tc3NextBtn'),
        $tc4Nextbtn = $('.tc4NextBtn');
    $info.hide();
    //首页动画
    var timer1 = window.setTimeout(function () {
        $xin_1.fadeIn(function () {
            $xin_2.fadeIn(function () {
                $xin_3.addClass('act');
            });
        });
    },1000);
    //首页开始按钮
    $starBtn.on('click',function () {
        $info.hide();
        $cgWrap.show();
        window.clearTimeout(timer1);
        timing();
    });
    //第一关倒计时
    var timing = function () {
        var timeBarInit = 100,
            timeBarStep = 5,
            timeBarWidth,
            i = 0;
        timer2_1 = window.setInterval(function () {
            if(i < 19){
                i+= 1;
                if(i > 14){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(20 - i);
            }else if(i = 19){
                $time.text(0);
                $title.addClass('act_2');
                $watch.hide();
                $girl_1.addClass('act');
                $barInner.hide();
                showTc_fail_1();
                window.clearInterval(timer2_1);
                i = 0;
                timeInit();
                flag = 1;
            }
        },1000);
    }
    //第二关倒计时
    var timing1 = function () {
        var timeBarInit = 100,
            timeBarStep = 5,
            timeBarWidth,
            i = 0;
        timer2_2 = window.setInterval(function () {
            if(i < 19){
                i+= 1;
                if(i > 14){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(20 - i);
            }else if(i = 19){
                $time.text(0);
                $title.addClass('act_3');
                $barInner.hide();
                showTc_fail_2();
                window.clearInterval(timer2_2);
                i = 0;
                timeInit();
                flag = 2;
                $openTv.show();
                var timer3 = setInterval(function () {
                    $openTv.addClass('act');
                    var timer4 = setTimeout(function () {
                        $openTv.removeClass('act');
                    },500);
                },1000);
            }
        },1000);
    }
    //第三关倒计时
    var timing2 = function () {
        var timeBarInit = 100,
            timeBarStep = 5,
            timeBarWidth,
            i = 0;
        timer2_3 = window.setInterval(function () {
            if(i < 19){
                i+= 1;
                if(i > 14){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(20 - i);
            }else if(i = 19){
                $time.text(0);
                $barInner.hide();
                $title.addClass('act_4');
                showTc_fail_3();
                $openTv.hide();
                $tv.addClass('act');
                $box.hide();
                $girl_1.addClass('act_1');
                window.clearInterval(timer2_3);
                i = 0;
                timeInit();
                flag = 3;
            }
        },1000);
    }
    //第四关倒计时
    var timing3 = function () {
        var timeBarInit = 100,
            timeBarStep = 5,
            timeBarWidth,
            i = 0;
        timer2_4 = window.setInterval(function () {
            if(i < 19){
                i+= 1;
                if(i > 14){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(20 - i);
            }else if(i = 19){
                $time.text(0);
                $title.addClass('act_5');
                $barInner.hide();
                showTc_fail_4();
                $lev4.addClass('act');
                window.clearInterval(timer2_4);
                i = 0;
                timeInit();
                flag = 4;
            }
        },1000);
    }
    //第五关倒计时
    var timing4 = function () {
        var timeBarInit = 100,
            timeBarStep = 5,
            timeBarWidth,
            i = 0;
        timer2_5 = window.setInterval(function () {
            if(i < 19){
                i+= 1;
                if(i > 14){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(20 - i);
            }else if(i = 19){
                $time.text(0);
                $barInner.hide();
                $lev4Bg.hide();
                $lev4.hide();
                $girl_1.hide();
                $lev5Man.show();
                showTc_5();
                window.clearInterval(timer5);
                window.clearInterval(timer6);
                window.clearInterval(timer2_5);
                i = 0;
                timeInit();
                flag = 5;
            }
        },1000);
    }
    //重置倒计时时间及进度条
    function timeInit() {
        $('#time').text(20);
        $barInner.width(100+"%");
        $barInner.css('background','#fef979');
        $barInner.show();
    }
    //第一关 点击手表
    $watch.on('click',function () {
        flag = 1;
        $(this).hide();
        window.clearInterval(timer2_1);
        $girl_1.addClass('act');
        showTc_success_1();
    });
    
    //第一关弹窗下一步按钮
    $tc1NextBtn.on('click',function () {
        timeInit();
        hideTc_success_1();
        hideTc_fail_1();
        $title.addClass('act_2');
        $num.text(2);
        timing1();
    });
    //第二关 点击电视
    $tv.on('click',function () {
        if(flag === 1){
            flag = 2;
            $openTv.show();
            window.clearInterval(timer2_2);
            var timer3 = setInterval(function () {
                $openTv.addClass('act');
                var timer4 = setTimeout(function () {
                    $openTv.removeClass('act');
                },500);
            },1000);
            showTc_success_2();
        }
    });
    //第二关弹窗下一步按钮
    $tc2NextBtn.on('click',function () {
        timeInit();
        hideTc_success_2();
        hideTc_fail_2();
        $title.addClass('act_3');
        $num.text(3);
        timing2();
    });
    //第三关点击魔百盒
    $box.on('click',function () {
        if(flag === 2){
            flag = 3;
            window.clearInterval(timer2_3);
            $openTv.hide();
            $tv.addClass('act');
            $(this).hide();
            $girl_1.addClass('act_1');
            showTc_success_3();
        }
    });
    //第三关弹窗下一步按钮
    $tc3NextBtn.on('click',function () {
        timeInit();
        hideTc_success_3();
        hideTc_fail_3();
        $title.addClass('act_4');
        $num.text(4);
        $lev4Bg.show();
        timing3();
    });
    //第四关点击摄像头
    $sxt.on('click',function () {
        if (flag === 3){
            flag = 4;
            $lev4.addClass('act');
            window.clearInterval(timer2_4);
            showTc_success_4();
        }
    });
    //第四关点击弹窗下一步按钮
    $tc4Nextbtn.on('click',function () {
        timeInit();
        $lev4Bg.hide();
        $lev4.hide();
        $girl_1.hide();
        $title.addClass('act_5');
        $lev5Girl.show();
        timer5 = setInterval(function () {
            $lev5Girl.addClass('act');
            timer6 = setTimeout(function () {
                $lev5Girl.removeClass('act');
            },500);
        },1000);
        $lev5Man.show();
        hideTc_success_4();
        hideTc_fail_4();
        $num.text(5);
        timing4();
    });
    //第五关点击门
    $door.on('click',function () {
        $time.text(0);
        $barInner.hide();
        $lev4Bg.hide();
        $lev4.hide();
        $girl_1.hide();
        $lev5Man.show();
        showTc_5();
        window.clearInterval(timer5);
        window.clearInterval(timer6);
        window.clearInterval(timer2_5);
        timeInit();
        flag = 5;
    });
    //显示第一关成功弹窗
    function showTc_success_1() {
        $('#tc_success_1').show();
        showMask();
    }
    //显示第一关失败弹窗
    function showTc_fail_1() {
        $('#tc_fail_1').show();
        showMask();
    }
    //显示第二关成功弹窗
    function showTc_success_2() {
        $('#tc_success_2').show();
        showMask();
    }
    //显示第二关失败弹窗
    function showTc_fail_2() {
        $('#tc_fail_2').show();
        showMask();
    }
    //显示第三关成功弹窗
    function showTc_success_3() {
        $('#tc_success_3').show();
        showMask();
    }
    //显示第三关失败弹窗
    function showTc_fail_3() {
        $('#tc_fail_3').show();
        showMask();
    }
    //显示第四关成功弹窗
    function showTc_success_4() {
        $('#tc_success_4').show();
        showMask();
    }
    //显示第四关失败弹窗
    function showTc_fail_4() {
        $('#tc_fail_4').show();
        showMask();
    }
    //关闭第一关成功弹窗
    function hideTc_success_1() {
        $('#tc_success_1').hide();
        hideMask();
    }
    //关闭第一关失败弹窗
    function hideTc_fail_1() {
        $('#tc_fail_1').hide();
        hideMask();
    }
    //关闭第二关成功弹窗
    function hideTc_success_2() {
        $('#tc_success_2').hide();
        hideMask();
    }
    //关闭第二关失败弹窗
    function hideTc_fail_2() {
        $('#tc_fail_2').hide();
        hideMask();
    }
    //关闭第三关成功弹窗
    function hideTc_success_3() {
        $('#tc_success_3').hide();
        hideMask();
    }
    //关闭第三关失败弹窗
    function hideTc_fail_3() {
        $('#tc_fail_3').hide();
        hideMask();
    }
    //关闭第四关成功弹窗
    function hideTc_success_4() {
        $('#tc_success_4').hide();
        hideMask();
    }
    //关闭第四关失败弹窗
    function hideTc_fail_4() {
        $('#tc_fail_4').hide();
        hideMask();
    }
    //显示第五关弹窗
    function showTc_5() {
        $('.lev5Tc').show();
        $('#mask').css('opacity','.7');
        showMask();
    }
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }

    //->MUSIC
    ~function () {
        var musicMenu = document.getElementById('musicMenu'),
            musicAudio = document.getElementById('musicAudio');

        musicMenu.addEventListener('click', function () {
            if (musicAudio.paused) {//->暂停
                musicAudio.play();
                musicMenu.className = 'music move';
                return;
            }
            musicAudio.pause();
            musicMenu.className = 'music';
        }, false);

        function controlMusic() {
            musicAudio.volume = 0.1;
            musicAudio.play();
            musicAudio.addEventListener('canplay', function () {
                musicMenu.style.display = 'block';
                musicMenu.className = 'music move';
            }, false);
        }
        window.setTimeout(controlMusic, 1000);
    }();
});
