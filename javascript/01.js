$('.home').on('mousemove', function (e) {
	let x = e.pageX - 15 + 'px';
	let y = e.pageY - 15 + 'px';
	$('.cusor').css({ left: +x, top: +y });
});

$('#content1.carousel').slick({ slidesToShow: 2 });

$('.tab-button').on('click', function () {
	const tabButtonId = $(this).attr('id');
	$('.tab-button').removeClass('active');
	$('.tab-content').removeClass('active');

	$(this).addClass('active');
	//변수tabButtonId 의 값을 이용하여 content1 로 편집
	const targetContent = $('#' + 'content' + tabButtonId.slice(-1));
	targetContent.addClass('active');

	if (targetContent.hasClass('slick-initialized')) {
		targetContent.slick('unslick');
	}
	targetContent.slick({ slidesToShow: 2 });
});

$('.popup').magnificPopup({ type: 'image' });

// ---------------------------------------------------
/* skill */
const win = $(window);
const speed = win.height() * 0.9;
const project = $('.project');
const animationOst = $('.container2').offset().top;

let sboxs = $('.s_boxs');
let isAni = false;

function progressAnimation() {
	sboxs.each(function () {
		var $this = $(this),
			progressText = $this.find('.rate'),
			progressRate = progressText.attr('data-num');

		var text = function () {
			$({ rate: 0 }).animate(
				{ rate: progressRate },
				{
					duration: 2000,
					progress: function () {
						var now = this.rate;
						progressText.text(Math.floor(now) + '%');
					},
					complete: function () {
						isAni = true;
					},
				}
			);
		};
		text();
	});
}

/* slide */

win.on('scroll', function () {
	let winSCT = win.scrollTop() + speed;
	if (winSCT >= animationOst && !isAni) {
		progressAnimation();
	}
	project.each(function (i, o) {
		const tg = $(this);
		const tgtop = tg.offset().top;
		if (winSCT > tgtop) {
			tg.find('.left_box').css('transform', 'translateX(0%)');
			tg.find('.right_box').css('transform', 'translateX(0%)').delay(5000);
		}
	});
});

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
