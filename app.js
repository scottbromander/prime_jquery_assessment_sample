$(document).ready(function(){

	var clicks = 0;

	$(".clickMe").on('click', function(){
		clicks++;

		console.log("Clicked");

		$("body").append("<div class='newDiv' data-color-toggle='1'></div>");
		var el = $("body").children().last();
		el.append("<p>Here are the number of clicks: " + clicks + "</p>");
		el.append("<button class='removeButton'>Remove</button");
		el.append("<button class='changeColor'>Change Color</button>");
	});

	$("body").on("click", ".changeColor", function(){
		var parentEl = $(this).parent();

		if(parentEl.data('colorToggle') == 1){
			parentEl.data("colorToggle", 2);
			parentEl.css("background-color", "#FF0000");
		} else {
			parentEl.data("colorToggle", 1);
			parentEl.css("background-color", "#00FF00");
		}
	});

	$("body").on("click", ".removeButton", function(){
		var parentEl = $(this).parent();

		parentEl.remove();
	});
});