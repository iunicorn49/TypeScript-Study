/**
 * 接口(Interface)
 * 用来建立某种代码约定, 使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定.
 */
interface IPerson {
	name: string
	age: number
}

class Aperson {
	constructor(public config: IPerson) {

	}
}

/**
 * typescript 会在这里检查, 是否将参数全部传入
 * 属性类型与属性数量没有一一对应的情况下, 会报错
 */
let a = new Aperson({
	name: 'atom',
	age: 23
})

/**
 * interface 来定义方法, 用 类 来实现方法
 * 配合关键字 implements 使用
 */

interface Animal {
	eat()
}

class Sheep implements Animal {
	eat() {
		console.log('i eat grass')
	}
}

class Tiger implements Animal {
	eat() {
		console.log('i eat meat')
	}
}