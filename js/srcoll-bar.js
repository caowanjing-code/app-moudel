function animate(){
    $(".charts").each(function(i,item){
        var a=parseInt($(item).attr("w"));
        $(item).animate({
            width: a+"%"
        },1000);
    });
}
animate();
