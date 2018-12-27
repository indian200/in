$('#totop').click( function() { $('html, body').animate({ scrollTop: 0 }, 400); } );

$(window).scroll(function() {
if ($(this).scrollTop() > 0) $('#totop').show( 300 );
else $('#totop').hide( 300 );
});
