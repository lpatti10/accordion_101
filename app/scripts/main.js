
/*
// Successful at single-click expansion
$('a.titlebar').on('click', function() {
	$('p.contentHide').removeClass('contentHide').addClass('contentShow');
});


// This toggle failed
$('a.titlebar').on('click', function() {
	$('p.contentHide').removeClass('contentHide').addClass('contentShow');
	$(this).toggleClass(contentHide contentShow);
});


// This toggle failed
$('a.titlebar').on('click', function() {
  $( this ).toggleClass('contentShow');
});


// Applies both classes causing padding conflicts
$('a.titlebar').on('click', function() {
  $('p.contentHide').toggleClass('contentShow');
});


// Applies both classes causing padding conflicts
$('a.titlebar').on('click', function() {
  $('p.contentHide').toggleClass('contentShow', 'contentHide');
});


// Does not work 
$('a.titlebar').on('click', function() {
  $(this).toggleClass('contentShow');
});


$('a.titlebar').on('click', function() {
		$(this).parents().siblings('p.contentHide').addClass('contentShow');
    $(this).parents('p.contentHide').removeClass('contentShow');
});
*/

// SUCCESS, but havent figured out the conditional
/*
$('a.titlebar').on('click', function() {
  $('p.contentHide').toggleClass('contentShow');
});
*/

$('a.titlebar').on('click', function() {
		  $(this).next().toggleClass('contentShow');
      $(".accordion-content").not($(this).next()).removeClass('contentShow');
});




/*
$(document).ready(function() {
  $("#accordion section h1").click(function(e) {
    $(this).parents().siblings("section").addClass("ac_hidden");
    $(this).parents("section").removeClass("ac_hidden");

    e.preventDefault();
  });
});


$( "p" ).click(function() {
  $( this ).toggleClass( "highlight" );
});



<script type="text/javascript">
  $(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });
  });
</script>

*/