$(document).ready(function(){
	var letters = ["R", "O", "S", "A", "C", "E", "A"];
	var count = 0;

	$(".title").css("font-size", "350px");
	$(".title").css("margin-top", "20%");

	var letterScroll = setInterval(scroll, 500);
	function scroll(){
		var letter = letters[count];
		console.log(letter.toString());
		$(".title").text(letter);
		count = (count+1)%7;
	}

	$(".title").click(function(){
		$(this).hide().fadeIn("slow");
		$(this).text("Rosacea");	
		$(this).css("font-size", "120px");
		$(this).css("margin-top", "40%");
		
		$(".top-left, .top-right, .bottom-left, .bottom-right").css("opacity", "1");	
		$("body").css("background-color", "");
		$("body").css("background", "url(assets/img/hero.jpg) no-repeat center center fixed");
		clearInterval(letterScroll)
	});

});
