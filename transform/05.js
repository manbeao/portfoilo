const o = $('.card');
const o2 = $('h2');
$('#top').on('mousemove', function (e) {
    let x = -($(window).innerWidth() / 2 - e.pageX) / 30;
    let y = ($(window).innerHeight() / 2 - e.pageY) / 30;
    o.attr('style',`transform:rotateY(${x}deg) rotateX(${y}deg)`)
    o2.attr({style:`transform:rotateY(${x*3.5}deg) rotateX(${y}px) translateZ(20px) translateX(${y}px)`})
})