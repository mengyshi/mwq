$(function(){
	var count = 0;
	movea();
	setInterval(function() {
		count++;
		if(count == $(".lunbo2 img").length) {
			count = 0;
		}
		movea()
	}, 1000)
	function movea(){
		$(".lunbo2 img").eq(count).removeClass("none")
		.siblings().addClass("none");
	
		/*$(".bigtop p span").eq(count).css("background","red")
		.siblings().css("background","#000");*/
	}
	
	$(".guanfang li").mouseover(function(){
		$(".tuijianm>div .img").eq($(this).index()).removeClass("none")
		.siblings().addClass("none")
	})
	//官方推荐
})
