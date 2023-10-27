// $('.container1').on('mousemove',function(e){
//         console.log(e);
//         let x=-e.clientX;
//         let y=-e.clientY;
//        $('.hover img').css({top:(y/5),left:(x/2)});
//     });

// ---------------------------------------------------

    var skill = $('.skill');
    var skbox = $('.sk_box');
    var skboxOST = skbox.offset().top;
    // var excuted = false;
    // console.log(excuted);
    
    $(window).scroll(function () {
        var currentSCT = $(this).scrollTop();
        if (currentSCT >= skboxOST) {
            if (!charts.hasClass('active')) {
                animateChart();
                charts.addClass('active');
            }
        }
    });
    
    function animateChart() {
        chart.each(function () {
            var item = $(this);
            var title = item.find('.sk_box1 h2');
            var targetNum = title.attr('data-num');
    
            $({ rate: 0 }).animate(
                { rate: targetNum },
                {
                    duration: 1500,
                    progress: function () {
                        var now = this.rate;
                        var amount = 300 - (300 * now) / 100;
    
                        title.text(Math.floor(now));
                    },
                }
            );
        }); //chart each
    }



    // ----------------------------------------------
































// const win = $(window);
// const speed = win.height() * 0.9;
// const pj1 = $('.project1');
// win.on('scroll', function () {
// 	let winSCT = win.scrollTop() + speed;
// 	pj1.each(function (i, o) {
//     const tg=$(this);
//     const tgtop=tg.offset().top;
//     //console.log(tg.offset().top);
//     if(winSCT>tgtop){
//       console.log((winSCT>pj.eq(0).offset().top));
//       tg.find('.left_box').css('transform','translateX(0%)');
//       tg.find('.right_box').css('transform','translateX(0%)');
//     }
// 	});
// });








