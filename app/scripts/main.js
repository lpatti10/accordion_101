
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
*/

$('a.titlebar').on('click', function() {
  $('p.contentHide').toggleClass('contentShow', 'contentHide');
});



/*
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