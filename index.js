$(function(){
    var a = $(".advertisement__recommend__slide_img").length;
    var i=0;
    var b = $(".dot");
    function next(){
        console.log(123);
        i++;
        if (i>=a){
            i=0;
        }
        if (i>=1){
            b[i-1].className=b[i-1].className.replace("active","");
            b[i].className+=' active';
        }
       else{
             b[a-1].className=b[a-1].className.replace("active","");
             b[0].className+=' active';
       }
        $(".advertisement__recommend__slide__wrap").css({
            'transform': 'translateX('+ -16.66667*i+'%)'
        })
    };
    $(".Pre").click(next);
    $(".Next").click(function(){
        i--;
        if (i<0){
            i=a-1;
        }
        if (i!=a-1){
            b[i+1].className=b[i+1].className.replace("active","");
            b[i].className+=' active';
        }
       else{
             b[0].className=b[0].className.replace("active","");
             b[i].className+=' active';
       } 
    $(".advertisement__recommend__slide__wrap").css({
        'transform': 'translateX('+ -16.66667*i+'%)'
    })
    })
    b.click(function(event){
      $(".wrap__dot").find(".active").removeClass("active")
        $(event.target).addClass("active");
        for (var temp = 0; temp<b.length; temp++){
            if (event.target===b[temp])
            {
                $(".advertisement__recommend__slide__wrap").css({
                    'transform': 'translateX('+ -16.66667*temp+'%)'
                })
                i=temp;
                break;
            }
        }
    })
   setInterval(next, 5000);
   
})
