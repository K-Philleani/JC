function drop(arr, size) {
	return arr.filter((value, index) => index >= size)
}

function dropRight(arr, size) {
	return arr.filter((value, index) => index < (arr.length - size))
}