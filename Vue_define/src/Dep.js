
var uid = 0
class Dep {
	constructor() {
		this.id = uid++
		console.log("Dep is here")
		// 用数组存储自己的订阅者
		// 这个数组里放的是Watcher实例
		this.subs = []
	}
	// 添加订阅
	addSub(sub) {
		this.subs.push(sub)
	}
	// 添加依赖
	addDepend() {
		if (Dep.target) {
			this.addSub(Dep.target)
		}
	}
	notify() {
		const subs = this.subs.slice(0)
		// 遍历
		for (let i = 0; i < subs.length; i++) {
			subs[i].update()
		}
	}
}


export default Dep