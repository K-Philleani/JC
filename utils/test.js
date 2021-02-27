

const arr1 =  [
	{ id: 123, name: 'ttt' },
	{ id: 234, name: 'yyy' }
];

const arr2 = [
	{ id: 123, age: 20 },
	{ id: 234, age: 23 },
	{ id: 345, age: 100 }
]


let newArr = []
arr1.forEach((item, index) => {
	arr2.forEach((v, i) => {
		if (item.id == v.id) {
			newArr.push(Object.assign(item, v))
		}
	})
})
console.log(newArr)
