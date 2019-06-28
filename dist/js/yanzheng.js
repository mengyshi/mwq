
function getid(id){
	return document.getElementById(id);
}
function random(){
	var code = "";
	while(code.length < 4){
	var num = Math.floor(Math.random()*43)+48;
		if(num>=48&&num<=57){
			code += String.fromCharCode(num);
		}
	}
	return code;
}//随机四位验证码，包含数字


