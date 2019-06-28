$(function() {
	var flag = true;
	$(window).scroll(function() {
		if(flag) {
			var st = $(this).scrollTop();
			if(st > 1300) {
				$("#floorNav").fadeIn();
			} else {
				$("#floorNav").fadeOut();
			}
			$("#content>div").each(function() {
				if(st >= $(this).offset().top - $(this).outerHeight() / 2){
					var index = $(this).index();
					$("#floorNav li").eq(index).addClass("hover")
					.siblings().removeClass("hover");
				}
			})
		}
	})
	$("#floorNav li:not(:last)").click(function() {
		flag = false;
		var index = $(this).index();
		$(this).addClass("hover")
			.siblings().removeClass("hover");
		$("body,html").animate({
			"scrollTop": $("#content>div").eq(index).offset().top
			}, 200, function() {
				flag = true;
		});
	});
	$("#floorNav li:last").click(function() {
		$("body,html").animate({
			"scrollTop": 0
		}, 200);
	})
	//以上为五成楼效果
	
	
	$(".huitop").click(function() {
		$("body,html").animate({
			"scrollTop": 0
		}, 200);
	})
	//右下角 回到顶部
	$(".youce>div:nth-child(4)").click(function(){
		alert("想啥呢？哪有客服，有麻烦请拨打110");
	})
	//客服
	
})