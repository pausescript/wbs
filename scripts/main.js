$(document).ready(function(){
	$(".left-nav li").on("mouseover",function(){
		$("#sub-menu").show(function(){
			$("#sub-menu").css("opacity",1);
		})
	});
	$("#sub-menu").on("mouseleave",function(){
		$("#sub-menu").hide(function(){
			$("#sub-menu").css("opacity",0);
		})
	})

});