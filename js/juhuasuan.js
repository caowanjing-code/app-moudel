$(function(){
    
    var a=$(".tab-nav li").length;
    // console.log(a);
    for(let b=0;b<a;b++){
        ($(".tab-nav li").eq(b)).click(function(){
            console.log(typeof(b) );
            console.log(b)
            // console.log(4444)
            console.log( $(".swiper-container:eq(b)"));
            $(".swiper-container:eq(b)").css("display","block").siblings().css("display","none")
          
            

        


        })
    }
}  )