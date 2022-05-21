$(document).ready(function () {
    
    $('.gray_block').click(closeNav);
    $('.gray_block').click(closeRes);

    $('.sidenav_logo').click(closeNav);
    $('#btn_burger').click(openNav);
    $('#btn_burger').click(function(){
        $('.menu_list a').animate({
            opacity: 1
        },
        {duration:300, queue: false});
    });
    $('.btn_close').click(closeNav);
    $('.menu_list a').click(function(){
        closeNav();
    })
   
    $('#res_btn_submit').click(function () { 
        alert("Aceasta functie tine de back-end.")
    });

    $('#res_btn_x').click(function () { 
        closeRes();
     });
     $('#btn_reservations').click(function () { 
         openRes();
      });
     $('.btn_rezervari').click(function(){
         openRes();
     })
      
    $('.menu_list a').mouseover(function () { 
        
        $(this).animate({
            'padding-left':60,
            opacity:1
        },
        {duration: 300, queue: false});
        $('.menu_list a').not(this).animate({
            opacity:0.5
        },
        {duration: 300, queue: false});
    }); 

    $('.menu_list a').mouseout(function () { 
        
        $(this).animate({
            'padding-left':32,
            opacity:0.5
        },
        {duration: 300, queue: false});
    });
    $('#menu_lower, .linie_lunga, #grayblock, #div_btn_close, .sidenav_logo').mouseover(function(){
        $('.menu_list a').animate({
            opacity: 1
        },
        {duration:300, queue: false});
    });
    
    function closeRes(){
        $('#grayblock').animate({opacity: 0},0).animate({width: '0%'},{duration:0,queue:false});
        $('#div_reservations').hide();
    }
    function openRes(){
        $('#grayblock').animate({width: '100%'},{duration: 0,queue: false}).animate({opacity: 0.5},{duration:0,queue:false});
        $('#div_reservations').show();
    }

    function closeNav() { 
        $('#grayblock').animate({opacity: 0}, 300).animate({width: '0%'},300);
        document.getElementById("mySidenav").style.width = "0px";
     }
     function openNav() {
        document.getElementById("mySidenav").style.width = "375px";
        $('#grayblock').animate({width: '100%'},1).animate({opacity: 0.5}, 300);
     }
});
