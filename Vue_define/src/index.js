import observe from './observe.js'

var obj = {
	a: {
		m: {
			n: 5
		}
	},
	b: 10,
	g: [1, 2, 3, 4]
}

observe(obj)
obj.g.push(6, 777)
console.log(obj.g)