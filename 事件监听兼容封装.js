//事件监听兼容写法
function addEvent(ele,eve,fn){
	if(ele.addEventListener){
		//普通浏览器
		ele.addEventListener(eve,fn);
	}else if(ele.attachEvent){
		//兼容ie678
		ele.attachevent(eve,fn);
	}else{
		//远古浏览器
		ele["on"+eve] = fn;
	}
}var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

ee.on('event-name', function(foo, bar) {

});

ee.emit('event-name', 'foo', 'bar');


//事件解绑兼容写法
function removeEvent(ele,eve,fn){
	if(ele.removeEventListener){
		ele.removeEventListener(eve,fn);
	}else if(ele.detachEvent){
		ele.detachEvent(eve,fn);
	}else{
		ele["on"+eve] = null;
	}
}
