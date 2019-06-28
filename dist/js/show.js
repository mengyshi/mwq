$(function() {
	$("#headtop li:has(ul)").hover(function(e) {
		if($(e.target).children().length != 0) {
			$(this).children().show().css("zIndex","1");
			e.stopPropagation();
		}
	},function(){
		$(this).children().hide()
	})
	//多级列表展示jq  头部最上边  代码27行
	
	$(".cuxiao span").mouseover(function(){
		$(".cuxiao>div>ul").eq($(this).index()).removeClass("none")
		.siblings().addClass("none")
	})
	//   促销信息切换
	
	
		var str4 = "";
		$.get("http://47.104.244.134:8080/goodsbytid.do",{
				tid:13,
				page:1,
				limit:6
			}).done(data=>{
				var data = data.data;
				
				for(var i = 0; i<data.length;i++){
					str4 +=`
						<div class="left">
							<a href="xiangqing.html?id=${data[i].id}">
							<img src="${data[i].picurl}" alt="图片未找到" title="${data[i].name}"/>
							<p class="redhover">${data[i].name}</p>
							<span class="red">￥${data[i].price}</span>
						</div>
					`
				}
				$("#left1").html(str4)
			})
			var str5 = "";
			$.get("http://47.104.244.134:8080/goodsbytid.do",{
					tid:13,
					page:2,
					limit:6
				}).done(data=>{
					var data = data.data;
					//console.log(data)
					for(var i = 0; i<data.length;i++){
						str5 +=`
							<div class="left">
								<a href="xiangqing.html?id=${data[i].id}">
								<img src="${data[i].picurl}" alt="图片未找到" title="${data[i].name}"/>
								<p class="redhover">${data[i].name}</p>
								<span class="red">￥${data[i].price}</span>
							</div>
						`
					}
					$("#left2").html(str5)
				})
	$("#qietu>span").click(function(){		
		if($(this).index() == 0 ){
			$("#qietu .left1").animate({top:'0',left: '-1200px'},500);
			$("#qietu .left2").animate({top:'0',left: '0px'},500);
		}
		if($(this).index() == 3 ){
			$("#qietu .left2").animate({top:'0',left: '1200px'},500);
			$("#qietu .left1").animate({top:'0',left: '0px'},500);
		}
	})
	//优惠推荐  
	
	
	
})