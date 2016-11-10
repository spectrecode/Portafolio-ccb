// menu fixed 
$(document).ready(function () {
    $(".botonCollapse").click(function () {
        $(".collapse").fadeToggle(500);
    // $("#primerSlid").click(function () {
    //     $(".collapse").fadeToggle(500);    
        // $(".top-menu").toggleClass("top-animate");
        // $(".mid-menu").toggleClass("mid-animate");
        // $(".bottom-menu").toggleClass("bottom-animate");
    });

    $("li a").click(function () {
        $(".collapse").fadeToggle(500);
        // $(".top-menu").fadeToggle("top-animate");
        // $(".mid-menu").toggleClass("mid-animate");
        // $(".bottom-menu").toggleClass("bottom-animate");
    });
});

// // cabecera desaparece

$(window).scroll(function(){
    // $(".intro h3").css("opacity", 1 -
    //     $(window).scrollTop()/600);
    $(".intro h3").css("opacity", 1 -
        $(window).scrollTop()/600);
});

// efecto gato skills

$(document).ready(function(){
    $(".onCat").click(function(){
        $(".contenedor").slideDown(0);
            $(".contenedor").slideToggle(3000);
    $(".offCat").click(function(){
        $(".contenedor").stop();
            $(".contenedor").slideDown(2000);
        });
    });
});

// // efecto miniaturas portafolio

//   $(document).scroll(function(e){
//     parallaxScroll();
//     });
     
//     function parallaxScroll(){
//         var scrolled = $(document).scrollTop();
//         $('.porta').css('top',(300-(scrolled*.150))+'px');
//         $('.trello').css('top',(610-(scrolled*.290))+'px');
//         $('.blog').css('top',(210-(scrolled*.100))+'px');
//         $('.user').css('top',(300-(scrolled*.150))+'px');
//         $('.eco').css('top',(610-(scrolled*.290))+'px');
//         $('.trelo').css('top',(210-(scrolled*.100))+'px');        
//         // $('.trelo').css('top',(200-(scrolled*.100))+'px'); 
//     }

// // menu dirige section

// // slider section
//     // intro canvas
// // $(document).ready(function(){
// //     $("#first").click(function(){
// //         $(".intro").slideUp(1000);
// //     });
// // })

// // $(document).ready(function(){
// //     $("#first-Down").click(function(){
// //         $("#segundoSlid").animate({
// //         }, 1000);
// //     });
// // });

// // $(document).ready(function(){
// //     $("#first-Down").click(function(){
// //         $("#primerSlid").slideToggle({
// //         }, 1000);
// //     });
// // });


// // $(document).ready(function(){
// //     $("#sec-Up").click(function(){
// //         $("#primerSlid").slideToggle(1000);
// //     });
// // })

// // $(document).ready(function(){
// //     $("#sec-Down").click(function(){
// //         $("#segundoSlid").slideToggle(1000);
// //     })
// // })

// // $(document).ready(function(){
// //     $("#thirt-Up").click(function(){
// //         $("#segundoSlid").slideToggle(1000);
// //     })
// // })

// // $(document).ready(function(){
// //     $("#thirt-Down").click(function(){
// //         $("#tercerSlid").slideToggle(1000);
// //     })
// // })

// // slider column about me

// $(document).ready(function(){
//     $("#first-Down").click(function(){
//         $(".colIzq").animate({
//             bottom: '340px', 
//             opacity: "1"
//         }, 1200);
//     });
// });

// $(document).ready(function(){
//     $("#first-Down").click(function(){
//         $(".colDer").animate({
//             top: '280px', 
//             opacity: "1"
//         }, 1200);
//     });
// });