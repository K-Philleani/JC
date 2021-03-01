function Call(Fn, obj, ...args) {
	if (obj === null || obj === undefined) {
		obj = globalThis
	}
	obj.temp = Fn
	let result = obj.temp(...args)
	delete obj.temp
	return result
}

