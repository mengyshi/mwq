$(function(){
	
	var yanzheng1 = getid("yanzheng1");
	var yanzheng21 = getid("yanzheng21");
	var yanzheng22 = getid("yanzheng22");
	yanzheng1.onclick = function() {
		yanzheng1.innerText = random();
	}
	yanzheng21.onclick = function() {
		yanzheng21.innerText = random();
	}
	yanzheng22.onclick = function() {
		yanzheng22.innerText = random();
	}

	var dengbtn = getid("dengbtn");
	dengbtn.onclick = function() {
		var txt11 = getid("txt11").value;
		var txt12 = getid("txt12").value;

		$.post("http://47.104.244.134:8080/userlogin.do", {											
			name: txt11,
			password: txt12
		}).done(data => {
			
			localStorage.setItem("token",data.data.token);
			location.href = "index.html?ming="+ txt11 + "?token=" + data.data.token
		})
	} //此处为登录界面





})	