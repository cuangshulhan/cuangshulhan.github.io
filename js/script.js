// Event pada saat Link

$('.page-scroll').on('click', function(e)
{
	//ambil isi href
	//this => mengambil href yaang di klik aja dari class page-scroll
	var tujuan = $(this).attr('href');

	//tangkap YBS
	var menuju = $(tujuan);

	$('body,html').animate({
		scrollTop: menuju.offset().top - 50
	}, 700, 'swing');

	e.preventDefault();
});

$(window).on('load', function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
})

// parallax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'

	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	//portfolio
	if(wScroll > $('.portfolio').offset().top - 250)
	{	
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){

				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			
			}, 300 * (i+1) );
		});
		
	}
})