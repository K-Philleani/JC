function debounce(callback, time) {
	let timeId = null
	// 返回一个函数
	return function(e) {
		if (timeId != null) {
			clearTimeout(timeId)
		}
		// 启动定时器
		timeId = setTimeout(() => {
			callback.call(this, e)
			// 重置定时器变量
			timeId = null
		}, time)
	}
}