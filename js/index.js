$("#button1").click(function() {
    $('html, body').animate({ scrollTop:$("#page1").offset().top}, 1000);
});


$("#button2").click(function() {
    $('html, body').animate({ scrollTop:$("#page2").offset().top}, 1000);
});

$("#button3").click(function() {
    $('html, body').animate({ scrollTop:$("#page3").offset().top}, 1000);
});

$("#button4").click(function() {
    $('html, body').animate({ scrollTop:$("#page4").offset().top}, 1000);
});

$('input').keydown(function() {
    $('#fox').effect('bounce', {times:3}, 500); 
  });


$('#code').hide();
$("#buttonx").click(function() {
  event.preventDefault();
	$('#code').toggle();
})