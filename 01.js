// $('.container1').on('mousemove',function(e){
//         console.log(e);
//         let x=-e.clientX;
//         let y=-e.clientY;
//        $('.hover img').css({top:(y/5),left:(x/2)});
//     });





// ---------------------------------------------------
/* skill */
$(function () {
	var sboxs = $('.s_boxs');
	var animationOst = $('.animation').offset().top - 600;
	var isAni = false;
	$(window).scroll(function () {
		if ($(window).scrollTop() >= animationOst && !isAni) {
			progressAnimation();
		}
	});

	function progressAnimation() {
		sboxs.each(function () {
			var $this = $(this),
				progressText = $this.find('.rate')
			// console.log(progressText);
		});
	}
});














// ----------------------------------------------
/* slide */


    const win = $(window);
    const speed = win.height() * 0.9;
    const project = $('.project');
    win.on('scroll', function () {
        let winSCT = win.scrollTop() + speed;
        project.each(function (i, o) {
        const tg=$(this);
        const tgtop=tg.offset().top;
        //console.log(tg.offset().top);
        if(winSCT>tgtop){
          tg.find('.left_box').css('transform','translateX(0%)');
          tg.find('.right_box').css('transform','translateX(0%)').delay(5000);
        }
        });
    });
    
// ---------------------------------------------



























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








