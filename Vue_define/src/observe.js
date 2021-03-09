import Observer from './Observer.js'
import defineReactive from "./defineReactive.js";

//创建observe函数
function observe(value) {
	// 如果value不是对象，什么都不做
	if (typeof value != 'object') return
	// 定义ob
	var ob
	if (typeof value.__ob__ !== 'undefined') {
		ob = value.__ob__
	} else {
		ob = new Observer(value)
	}
	return ob
}


export default observe