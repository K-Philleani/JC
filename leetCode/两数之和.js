var twoSum = function(nums, target) {
	let map = new Map()
	for (let i = 0; i < nums.length; i++) {
		let tem = target - nums[i]
		if (map.has(tem)) {
			return [map.get(tem), i]
		}
		map.set(nums[i], i)
	}
}