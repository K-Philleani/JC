import def from './util.js'
import defineReactive from './defineReactive.js'
import { arrayMethods } from './array.js'
import observe from "./observe.js";
import Dep from './Dep.js'

class Observer {
	constructor(value) {
		// 每一个Observer的实例都有一个Dep
		this.dep = new Dep()
		// 给实例(this，一定要注意，构造器中的this不是表示类本身，而是表示实例)添加了__ob__属性，值是这次的实例
		def(value, '__ob__', this, false)
		console.log("Observer构造器", value, value.__ob__)
		// Observer类的目的是：将一个正常的object转换为每个层级的属性都是响应式的(可以被侦测到的)object
		// 检查是数组还是对象
		if (Array.isArray(value)) {
			// 如果是数组，强行将这个数组的原型指向arrayMethods
			Object.setPrototypeOf(value, arrayMethods)
			// 让这个数组编的observe
			this.observeArray(value)
		} else {
			this.walk(value)
		}
	}
	// 遍历
	walk(value) {
		for (let k in value) {
			defineReactive(value, k)
		}
	}
	// 数组的特殊遍历
	observeArray(arr) {
		for (let i = 0, l = arr.length; i < l; i++) {
			// 逐项进行observe
			observe(arr[i])
		}
	}
}

export default Observer