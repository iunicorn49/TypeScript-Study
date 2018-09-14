let r: any
r = 13
r = 'dsdsds'

function hasResult(a: number, b: number) :number {
	return a + b
}

function noResult(a: string, b: boolean) :void {
	console.log(a, b)
}

// console.log(hasResult(2, 3))
// noResult('呵呵哒', true)

class Person {
	name: string
	age: number
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}
let me: Person
me = new Person('atom', 23)

console.log(me)