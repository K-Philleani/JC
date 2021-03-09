import def from './util.js'

// 得到Array的prototype
const arrayPrototype = Array.prototype

// 以Array.prototype为原型创建arrayMethods
const arrayMethods = Object.create(arrayPrototype)

// 要被改写的七个数组方法
const methodsNeedChange = [
	'push',
	'pop',
	'shift',
	'unshift',
	'sort',
	'splice',
	'reverse'
]

methodsNeedChange.forEach(methodName => {
	// 备份原来的方法
	const original = arrayPrototype[methodName]

	//定义新的方法
	def(arrayMethods, methodName, function(){
		console.log('KKKK')
		const result = original.apply(this, arguments)
		// 把类数组转换成数组
		const args = [...arguments]
		// 把这个数组上的__ob__取出来
		const ob = this.__ob__
		let inserted = []
		switch (methodName) {
			case 'push':
			case 'unshift':
				inserted = arguments
				break
			case 'splice':
				inserted = args.slice(2)
				break
		}
		// 判断有没有要插入的新项
		if (inserted) {
			ob.observeArray(inserted)
		}
		return result
	}, false)

})




export {
	arrayMethods
}