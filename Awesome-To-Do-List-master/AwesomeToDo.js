$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})



$("i").first().on("click", function() {
	$("input").fadeToggle(500);
})


$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(500, function() {
   		$(this).remove();
   });
});

$("input").keypress(function(event) {
	if((event.which) === 13) {
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i> </span> ' + $(this).val() + '</li>');	
		$(this).val("");
	}
})
