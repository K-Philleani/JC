import observe from './observe.js'


function defineReactive(data, key, val) {
	if (arguments.length == 2) {
		val = data[key]
	}
	// 子元素要进行observe, 至此形成递归，这个递归不是函数自己调用自己，而是多个函数，类循环调用
	let childOb = observe(val)
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get() {
			console.log("触发getter", key, val);
			return val
		},
		set(newVal) {
			console.log("触发setter", key, val)
			if (val === newVal) return
			val = newVal
			// 当设置了新的值，这个新的值也要被observe
			childOb = observe(newVal)
		}
	})
}

export default defineReactive