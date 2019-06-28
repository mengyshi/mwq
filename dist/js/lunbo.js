$(function(e){
	var count = 0;
	/*$(".bigtop p span").mouseover(function(){
		count = $(this).index() + 1;
		move();
	})*/
	move();
	setInterval(function() {
		count++;
		if(count == $(".bigtop p span").length) {
			count = 0;
		}
		move()
	}, 2000)
	function move(){
		$(".bigtop li").eq(count).addClass("lunbo")
		.siblings().removeClass();
		$(".bigtop p span").eq(count).css("background","red")
		.siblings().css("background","#000");
	}
	//以上为中央大图轮播部分  代码在130行
	
})