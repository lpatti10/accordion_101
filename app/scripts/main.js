$('a.titlebar').on('click', function() {
	$('p.contentHide').removeClass('contentHide').addClass('contentShow');
});

		$(this).toggleClass('contentHide');







/*

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