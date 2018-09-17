/**
 * 定义
 */
class Person {
	constructor(protected name: string) { // 这种写法, 等于 this.name = name, 必须使用访问控制符
		console.log('Person 构造完成!')
	}
	say() {
		console.log(`My name is ${this.name}`)
	}
}

/**
 * 继承
 */
class Student extends Person {
	constructor(name: string, private job: string, private code: number) {
		super(name)
		console.log('Student 构造完成!')
	}
	introduction() {
		super.say()
		this.seting()
	}
	private seting() { // 私有方法, 外部调用会报错
		console.log(`I\'m a ${this.job}, My Number is ${this.code}`)
	}
}

let atom = new Student('atom', 'DC', 21)

atom.introduction()

/**
 * 泛型(Generic)
 * 参数化的类型, 一般用来限制集合的内容.
 */

 let member: Array<Person>
 member[0] = new Person('m-1')
 member[1] = new Student('m-2', 'PL', 23)
//  member[2] = 2 // 报错, 应为, 这里规定, 数组成员必须是 Person 类型
