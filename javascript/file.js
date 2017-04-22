$(document).ready(function()
{
/********************/
    $(".All img").mouseenter(function()
    {
        
        $(this).css("opacity","0.8");
    });
    /*****************/
     $(".All img").mouseleave(function()
    {
        $(this).css("opacity","1");
    });
    /******************/
     $(".All .Vis img").click(function()
    {
        /** Deleting objectives**/
        $(".Arrows .Obj_arro img").hide();
        $(".Center_image .Obj_cen img").hide();
        $("section .Obj_top span").hide();
        $(".Obj_top .Vis_line").hide();
        $(".Obj_top li").hide();
        /****/
        /*Deleting structure*/
        $("section .Str_top span").hide();
        $(".Arrows .Str_arro img").hide();
        $(".Str_top .Str_details img").hide();
        $(".Str_top .Vis_line").hide();
         $(".Arrows .Str_arro img").hide();
         $(".Center_image .Str_cen img").hide();
        /******/
        /*Deleting mission*/
        $(".Arrows .Mis_arro img").hide();
        $(".Center_image .Obj_cen img").hide();
        
        $("section .Mis_top span").hide();
        $(".Mis_top .Vis_line").hide();
        $(".Mis_top li").hide();
         $(".Center_image .Mis_cen img").hide();
        /*******/
       /* if ($(".Center_image img").css('display')=='block')
        {$(".Center_image img").hide();}*/
        $(".Arrows .Mis_arro img").hide();
        $(".Arrows .Obj_arro img").hide();
        $(".Arrows .Str_arro img").hide();
        $(".Arrows .Vis_arro img").slideToggle(300);
        $(".Center_image .Vis_cen img").fadeToggle(500);
        $("section .Vis_top span").fadeToggle(800);
        $(".Vis_top .Vis_line").slideToggle(300,function(){$(".Vis_top li").fadeToggle(200);});
       
    });
    $(".All .Mis img").click(function()
    {
        if ($(".Center_image img").css('display')=='block')
        $(".Center_image img").hide();
        $(".Arrows .Obj_arro img").hide();
        $(".Arrows .Vis_arro img").hide();
        $(".Arrows .Str_arro img").hide();
        /** Deleting vision**/
        $(".Arrows .Vis_arro img").hide();
        $(".Center_image .Vis_cen img").hide();
        $("section .Vis_top span").hide();
        $(".Vis_top .Vis_line").hide();
        $(".Vis_top li").hide();
        /****/
        /** Deleting objectives**/
        $(".Arrows .Obj_arro img").hide();
        $(".Center_image .Obj_cen img").hide();
        $("section .Obj_top span").hide();
        $(".Obj_top .Vis_line").hide();
        $(".Obj_top li").hide();
        /****/
        /*Deleting structure*/
        $("section .Str_top span").hide();
        $(".Arrows .Str_arro img").hide();
        $(".Str_top .Str_details img").hide();
        $(".Str_top .Vis_line").hide();
        $(".Arrows .Str_arro img").hide();
        $(".Center_image .Str_cen img").hide();
        /******/
        
        $(".Arrows .Mis_arro img").slideToggle(300);
        $(".Center_image .Mis_cen img").fadeToggle(500);
        
        $("section .Mis_top span").fadeToggle(800);
        $(".Mis_top .Vis_line").slideToggle(300,function(){$(".Mis_top li").fadeToggle(200);});
    });
    $(".All .Obj img").click(function()
    {
        /** Deleting vision**/
        $(".Arrows .Vis_arro img").hide();
        $(".Center_image .Vis_cen img").hide();
        $("section .Vis_top span").hide();
        $(".Vis_top .Vis_line").hide();
        $(".Vis_top li").hide();
        /****/
        /*Deleting structure*/
        $("section .Str_top span").hide();
        $(".Arrows .Str_arro img").hide();
        $(".Str_top .Str_details img").hide();
        $(".Str_top .Vis_line").hide();
        $(".Arrows .Str_arro img").hide();
        $(".Center_image .Str_cen img").hide();
        /******/
        /*Deleting mission*/
        $(".Arrows .Mis_arro img").hide();
        $(".Center_image .Mis_cen img").hide();
        
        $("section .Mis_top span").hide();
        $(".Mis_top .Vis_line").hide();
        $(".Mis_top li").hide();
        /*******/
        if ($(".Center_image img").css('display')=='block')
        $(".Center_image img").hide();
        $(".Arrows .Mis_arro img").hide();
        $(".Arrows .Vis_arro img").hide();
        $(".Arrows .Str_arro img").hide();
        $(".Arrows .Obj_arro img").slideToggle(300);
        $(".Center_image .Obj_cen img").fadeToggle(500);
        $("section .Obj_top span").fadeToggle(800);
        $(".Obj_top .Vis_line").slideToggle(300,function(){$(".Obj_top li").fadeToggle(200);});
    });
    $(".All .Str img").click(function()
    {
        /** Deleting vision**/
        $(".Arrows .Vis_arro img").hide();
        $(".Center_image .Vis_cen img").hide();
        $("section .Vis_top span").hide();
        $(".Vis_top .Vis_line").hide();
        $(".Vis_top li").hide();
        /****/
        /** Deleting objectives**/
        $(".Arrows .Obj_arro img").hide();
        $(".Center_image .Obj_cen img").hide();
        $("section .Obj_top span").hide();
        $(".Obj_top .Vis_line").hide();
        $(".Obj_top li").hide();
         $(".Center_image .Obj_cen img").hide();
        /****/
        /*Deleting mission*/
        $(".Arrows .Mis_arro img").hide();
        $(".Center_image .Obj_cen img").hide();
        
        $("section .Mis_top span").hide();
        $(".Mis_top .Vis_line").hide();
        $(".Mis_top li").hide();
        $(".Center_image .Mis_cen img").hide();
        /*******/
        if ($(".Center_image img").css('display')=='block')
        $(".Center_image .Obj_cen img").hide();
        $(".Arrows .Mis_arro img").hide();
        $(".Arrows .Vis_arro img").hide();
        $(".Arrows .Obj_arro img").hide();
        $("section .Str_top span").fadeToggle(800);
        $(".Center_image .Str_cen img").fadeToggle(500);
        $(".Arrows .Str_arro img").slideToggle(300,function(){$(".Str_top .Vis_line").slideToggle(500);});
        $(".Str_top .Str_details img").slideToggle(300);
    });
});
