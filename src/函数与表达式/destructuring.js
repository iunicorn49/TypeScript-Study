function fromObject() {
	return {
		a: 'A',
		b: 'B',
		obj: {
			c: 'C'
		}
	}
}
let {a, b: outB, obj: {c} } = fromObject() 
// console.log('a:', a)
// console.log('outB:', outB)
// console.log('c:', c)

let arr = [1,2,3,4]
let [n1, n2, ...other] = arr
// console.log('n1:', n1) // 1
// console.log('n2:', n2) // 2
// console.log('other:', other) // [ 3, 4 ]

function comeArr(n1, n2, ...other) {
console.log('n1:', n1) // 1
console.log('n2:', n2) // 2
console.log('other:', other) // [ 3, 4 ]
}
comeArr(...arr)