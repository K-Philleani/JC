
let s = "abcdefg", k = 2
function reverseLeftWords(s, n) {
	let strLeft = s.substring(0, n)
	let strRight = s.substring(n)
	return strRight + strLeft
}
let res = reverseLeftWords(s, k)
console.log(res)

