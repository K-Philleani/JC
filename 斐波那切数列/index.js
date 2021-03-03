var fib = function(n) {
	if (n <= 1) return n
	const cache = []
	cache[0] = 0
	cache[1] = 1
	function memoize(number) {
		if(cache[number] !== undefined) {
			return cache[number]
		}
		cache[number] = memoize(number - 1) + memoize(number - 2)
		return cache[number]
	}
	const result = memoize(n)
	return result
};