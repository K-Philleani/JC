var climbStairs = function(n) {
	const cache = [0, 1, 2]
	function helper(n) {
		if (cache[n]) return cache[n]
		const res = helper(n -1) + helper(n -2)
		cache[n] = res
		return res
	}
	return helper(n)
};


