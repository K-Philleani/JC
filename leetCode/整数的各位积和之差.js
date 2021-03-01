var subtractProductAndSum = function(n) {
	let arr = num.toString().split('')
	let mul = eval(arr.join('*'))
	let sum = eval(arr.join('+'))
	return mul - sum
};