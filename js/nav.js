
$('#floating-nav').click(function()
{
	if ($('#nav-wrapper').hasClass('nav-wrapper-closed') == true)
	{
		$.each($('.fadeable'),function(){$(this).animate({opacity:0.2});});

		$('#nav-wrapper').removeClass('nav-wrapper-closed');

		setTimeout(function(){ $('#nav-info').animate({opacity:1}); }, 500);

		$('#floating-nav').addClass('close');

		var timeout = 250;
		$.each($('#nav nav ul li'),function()
		{
			var li = $(this);
			setTimeout(function(){ $(li).animate({opacity:1},2000); }, timeout);
			timeout+= 100;
		});
	}
	else
	{
		$.each($('#nav nav ul li'),function(){$(this).css('opacity',0);});
		$.each($('.fadeable'),function(){$(this).animate({opacity:1});});
		$('#nav-info').animate({opacity:0});
		$('#nav-wrapper').addClass('nav-wrapper-closed');
		$('#floating-nav').removeClass('close');	
	}
});

var x1 = 0;

setInterval(function(){ setBackgroundImages() }, 10);

function setBackgroundImages()
{
	x1++;

	if (x1 == 1600)
		x1 = 0;

	$('#nav-info').css('background-position-x', x1);	

}

$(document).ready(function()
{
    if ($(window).width() >= $(window).height())
        var size = $(window).width() * 3;
    else
        var size = $(window).height() * 3;

    $('#nav').css('width',size).css('height',size);
    $('#nav').css('top','-' + (size / 2) + 'px').css('right','-' + (size / 2) + 'px');
});

$(window).scroll(function()
{
    if ($(window).scrollTop() >= 100)
    {
        if ($('#floating-nav').css('display') == 'none')
        {
            $('#floating-nav').fadeIn();
        }
    }
    else
    {
        if ($('#nav-wrapper').hasClass('nav-wrapper-closed') == true)
        {
            $('#floating-nav').fadeOut(200);
        }
    }
});