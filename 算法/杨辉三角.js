

var generate = function(numRows) {
	if (numRows == 0) return []
	const arr = []
	for (let i = 0; i < numRows; i++) {
		arr[i] = []
		for (let j = 0; j <= i; j++) {
			if (j ==0 || i ==j) {
				arr[i][j] = 1
			} else {
				arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
			}
		}
	}
	return arr
};

console.log(generate(5))