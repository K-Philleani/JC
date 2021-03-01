var isHappy = function(n) {
	let set = new Set()
	n += ''
	let sum = 0
	while (sum !== 1) {
		sum = 0
		for (let i = 0; i < n.length; i++) {
			sum += n[i] * n[i]
		}
		if (set.has(sum)) return false
		n = sum + ''
		set.add(sum)
	}
	return true
};

console.log(isHappy(19))