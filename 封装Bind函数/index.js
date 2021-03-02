function Call(fn, obj, ...args) {
	obj.temp = fn
	let result = obj.temp(...args)
	console.log(arguments)
	console.log(args)
	delete obj.temp
	return result
}


function Bind(fn, obj, ...args) {
	return function(...args2) {
		return Call(fn, obj, ...args, ...args2)
	}
}

