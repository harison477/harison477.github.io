var f = 1;
$(function() {
	$('.fa_topBottom').on('click', function() {
		if (f == 1) {
			$('.fa__topBottom_link').attr('href', '#footer');
			$(this).css({transform: 'rotate(180deg)'});
			f = 2;
		}
		else {
			$('.fa__topBottom_link').attr('href', '#header');
			$(this).css({transform: 'rotate(360deg)'});
			f = 1;
		};
	});

})