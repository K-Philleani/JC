function Apply(fn, obj, args) {
	if (obj === null || obj === undefined) {
		obj = globalThis
	}
	obj.temp = fn
	let result = obj.temp(...args)
	delete obj.temp
	return result
}