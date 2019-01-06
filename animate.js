/*
* @Author: Hasee
* @Date:   2018-12-16 16:51:58
* @Last Modified by:   Hasee
* @Last Modified time: 2018-12-24 08:47:05
*/

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		// console.log(obj.style);
		// console.log([json]);
		for(var attr in json){
			var now = 0;
			// console.log(attr);
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
				 // console.log(getStyle(obj,attr));
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			// console.log(json[attr]);
			var speed = (json[attr] - now) / 8;
			// console.log("json[attr]:"+json[attr]);
			// console.log("now:"+now);
			// console.log(speed);
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			// console.log("obj.timer"+obj.timer);
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}