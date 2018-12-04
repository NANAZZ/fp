$(function(){
    //1. 动态创建link引用header.css
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
    //2. ajax请求header.html片段
    $.ajax({
        url:"http://localhost:2020/header.html",
        type:"get",
        success:function(res){
            $("#header").replaceWith(res)
            //导航栏下拉列表
            $("nav")
            .on("mouseenter","a",function(e){
                e.stopPropagation();
                var $a=$(this);
                var id=$(this).attr("data-target");
                $a.css("color","#d52975");
                $a.siblings().addClass("active");
                $(id).show().siblings().hide();
            })
            .on("mouseleave","a",function(e){
                e.stopPropagation();
                var $a=$(this);
                var id=$(this).attr("data-target");
                $a.css("color","#262626");
                $a.siblings().removeClass("active");
                $(id).hide();
            })

            // $("nav")
            // .on("mouseenter",function(){
            //     var $a=$(this).children().children().children().children().first();
            //     var id=$a.attr("data-target");
            //     $a.css("color","#d52975");
            //     $a.siblings().addClass("active");
            //     $(id).show().siblings().hide();
            // })
            // .on("mouseleave",function(){
            //     var $a=$(this).children().children().children().children().first();
            //     var id=$a.attr("data-target");
            //     $a.css("color","#262626");
            //     $a.siblings().removeClass("active");
            //     $(id).hide();
            // })

            //搜索框
            var $li=$(".header_right_first")
            $li.click(function(){
                $(this).children().first().hide();
                $(this).children().last().show();
            })
            $("header").click(function(){
                if(!$li){
                    $li.children().first().show();
                    $li.children().last().hide();
                }
            })

            //登录注册
            $(".header_right_third").click(function(){
                $(this).next().show();
            })
            $("#btn_create1").click(function(){
                $("#register_user").css("display","block");
                $("#login_user").css("display","none");
            })
            $("#btn_create2").click(function(){
                $("#register_user").css("display","none");
                $("#login_user").css("display","block");
            })
            $(".login_close").click(function(){
                $(".login_bg").css("display","none");
                $("#register_user").css("display","none");
                $("#login_user").css("display","block");
            })
        }
    })
})