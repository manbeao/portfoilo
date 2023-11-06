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