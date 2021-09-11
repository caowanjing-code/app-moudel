$(function(){
   var k= $('.footer-nav-item').length;
//    console.log(i);
for(let j=0;j<k;j++){
    $('.footer-nav a').eq(j).click(function(){
        // console.log(i);
        $('.footer-nav a').eq(j).css("color","red").siblings().css("color","#979797");
        // $('.footer-nav a span i').eq(j).css("color","red");
        // $('.footer-nav a span i')

    

       
    })
}
})