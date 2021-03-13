function unique(arr) {
	// 声明一个空数组
	const result = []
	arr.forEach(item => {
		// 检测result 数组中是否包含这个元素
		if (result.indexOf(item) == -1) {
			result.push(item)
		}
	})
	return result
}

function unique2(arr) {
	// 声明一个空数组
	const result = []
	// 声明一个空对象
	const obj = {}
	// 遍历数组
	arr.forEach(item => {
		if (!obj[item]) {
			obj[item] = true
			result.push(item)
		}
	})
	return result
}


function unique3(arr) {
	// 将数组转化为集合
	let set = new Set(arr)
	return Array.from(set)
}