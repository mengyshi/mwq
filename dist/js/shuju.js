$(function(){
	var str = "";
	var str1 = "";
	
	
	
	
	
	$.get("http://47.104.244.134:8080/goodstypelist.do",{l:1}).done(data=>{
		for(var i = 0; i<data.length; i++){
			str += `
				<li class="redhover">${data[i].name}<ul></ul> </li>
			`
			str1 += `
				<li class="left">${data[i].name}</li>
			`
		}
		$("#shuju").html(str);
		$("#qianggou").html(str1);
		
		var strr = "";
		$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2}).done(data=>{
			for(var i = 0; i<data.length; i++){
				strr += `
					<li class="redhover">${data[i].name}</li>
				`
			}
			
			$("#shuju li ul").html(strr)
			
			
		})
		
		
		
		
		
		
		
		
		
		
		var str22 = "";
			$.get("http://47.104.244.134:8080/goodsbytid.do",{
				tid:13,
				page:1,
				limit:10
			}).done(data=>{
				var data = data.data;
				for(var i = 0; i<data.length;i++){
					str22 +=`
						<li class="left"><a href="xiangqing.html?id=${data[i].id}">
							<img src="${data[i].picurl}" alt="图片未找到" title="${data[i].name}"/>
							<p class="redhover">${data[i].name}</p>
							<span class="red">￥${data[i].price}</span>
						</a></li>
					`
				}
				$("#lunbo11 ul").html(str22)
			})
		
		$(".qianggoum>div>ul li").mouseover(function(){
			$("#lunbo1 div").eq($(this).index()).removeClass("none")
			.siblings().addClass("none")
			//console.log($(this).index())
			var str2 = "";
			$.get("http://47.104.244.134:8080/goodsbytid.do",{
				tid:13,
				page:$(this).index()+1,
				limit:10
			}).done(data=>{
				var data = data.data;
				for(var i = 0; i<data.length;i++){
					str2 +=`
						<li class="left"><a href="xiangqing.html?id=${data[i].id}">
							<img src="${data[i].picurl}" alt="图片未找到" title="${data[i].name}"/>
							<p class="redhover">${data[i].name}</p>
							<span class="red">￥${data[i].price}</span>
						</a></li>
					`
				}
				$("#lunbo11 ul").html(str2)
			})
			
		})
		//此处为抢购
	})
	
	
})
	

	

