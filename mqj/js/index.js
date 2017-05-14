$(function () {

    $(".x1").click(function () {
        $(".box-one").css("display","none");
        $(".p").css("right","0.6rem").css("letter-spacing","0.3rem");
        $(".box-two p").css("opacity","1");
        $(".x2").css("display","block")
    })
    $(".x2").click(function () {
        $(".box-two").css("display", "none");
        $(".box-three p").css("left","1rem");
        $("html,body").css("overflow","auto")
    })
    
})