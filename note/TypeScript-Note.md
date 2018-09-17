# TypeScript

## 参数

### 类型
> 变量后面跟上 `:` 可以指定变量类型.
> `any` 类型, 可以声明为任意类型的变量, 并且后续类型可以转换.
```typescript
let str: string = '字符串'
let v: any
v = 13
v = 'str'

function hasResult(a: number, b: number) :number {
	return a + b
}

function noResult(a: string, b: boolean) :void {
	console.log(a, b)
}
```

#### 类型列表
- any: 任意类型.
- string: 字符串.
- number: 数字.
- boolean: 布尔值.
- void: 在方法中才能使用, 表示, 这个方法没有输出任何返回值.
- 自定义类型: 通过 class 或者 interface, 可以自己定义类型.

**自定义类型**
```typescript
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
```

### 默认参数
> 在参数声明后面用等号来指定参数的默认值.
> 方法中, 只有最后一个参数可以指定默认值.
```typescript
let username: string = 'nameless'

function defaultValue(a: string, b: string, c: string = 'jojo'): void {
	console.log('a:', a)
	console.log('b:', b)
	console.log('c:', c)
}

defaultValue('A', 'B', 'C')
defaultValue('A', 'B')
```
### 可选参数
> 在方法的参数声明后面用问号来标明此参数为可选参数.
> 当然, 需要在方法内部对特殊情况(可选参数未传入时)做出处理.
> 不能将第一个参数当做可选参数.
```typescript
function fn(a: string, b?: string, c: string = 'jojo'): void {
	console.log('a:', a)
	b && console.log('b:', b)
	console.log('c:', c)
}
fn('A')
fn('A', 'B')
```

## 函数

### Rest and Spread
> ...操作符
> 用来声明任意数量的方法参数.
>
```typescript
// 用来声明任意数量的方法参数
function fn(...args): void {
	args.forEach(arg => {
		console.log(arg)
	})
}
fn('a', 'b', 'c')

// typescript 并不支持, javascript 可以支持
function fn2(a, b, c) {
	console.log('a', a)
	console.log('b', b)
	console.log('c', c)
}

let args = ['A', 'B', 'C']
fn2(...args)
```

### generator
> 控制函数的执行过程, 手动暂停和恢复代码执行.
> typescript暂不支持.
```javascript
// function* 来声明, 自带一个 next() 方法, 每次调用, 会在 yield 关键字前打断, 直到下一次 next()
function* fn() {
	console.log('start')
	yield
	console.log('finish')
}

let fun1 = fn()

fun1.next() // start
fun1.next() // finish
```

```javascript
// next().value 可以拿到 yield 的返回值
function* getPrice(stock) {
	while(true) {
		yield Math.round(Math.random()*100)
	}
}

let priceGetter = getPrice('IBM')
let limitPrice = 15 // 低于15块才买
let price = 100 // 起始价格100块

while(price > limitPrice) {
	price = priceGetter.next().value
	console.log('getPrice return price:', price)
}

console.log('跳出循环')
```

### destructuring
> 析构表达式.
**通过对象**
```javascript
function fn() {
	return {
		a: 'A',
		b: 'B',
		obj: {
			c: 'C'
		}
	}
}
let {a, b: outB, obj: {c} } = fn() 
console.log('a:', a)
console.log('outB:', outB)
console.log('c:', c)
```
**通过数组**
```javascript
let arr = [1,2,3,4]
let [n1, n2, ...other] = arr
console.log('n1:', n1) // 1
console.log('n2:', n2) // 2
console.log('other:', other) // [ 3, 4 ]
```
**方法参数中使用**
```javascript
function comeArr(n1, n2, ...other) {
console.log('n1:', n1) // 1
console.log('n2:', n2) // 2
console.log('other:', other) // [ 3, 4 ]
}
comeArr(...arr)
```

## 表达式与循环

### 箭头函数
> 用来声明匿名函数, 消除传统匿名函数的`this`指针问题.

### for of 
**forEach for-in for-of 对比**
```javascript
let arr = [1, 2, 3, 4]
arr.desc = 'four number'

console.log('forEach:')
/**
 * forEach:
 * 只打印数组里的元素, 会忽略属性
 * 必须循环完成, 无法在中途跳出
 */
arr.forEach(item => {
	console.log(item)
})

console.log('\n')
console.log('for-in:')
/**
 * for in:
 * 打印了数组的下标包括, 数组对象的属性名
 * 可以循环字符串, 对象
 */
for (let n in 'arr') {
  console.log(n, ':', arr[n])
}

console.log('\n')
console.log('for-of:')
/**
 * 可以循环字符串
 * 循环可以被打断(break, continue)
 * 只打印数组里的元素, 会忽略属性
 * 可以被 break 和 continue 打断
 */
for (let n of arr) {
	if (n === 2) continue
	console.log(n)
}
```

## 类
> 类式**TypeScript**的核心, 使用**TypeScript**开发时, 大部分代码都写在类中.

### 关键字

| 关键字 | 类型 | 作用                   | 备注                                   |
| ------ | ---------------------- | -------------------------------------- | ------ |
| class | 关键字 | 声明一个类 |  |
| public | 访问控制符 | 声明属性与方法对外开放 | 不声明任何关键字时, 默认都是对外开放的 |
| private | 访问控制符 | 声明私有属性与方法 | 只能在该类的内部被访问到 |
| protected | 访问控制符 | 声明私有属性与方法, | 只能在该类的内部或被其子类访问到 |
| constructor | 构造函数 | 当类被 `new` 调用的时候, 会被调用, 且只被调用一次 | 外部无法访问到 |
| extends | 关键字 | 继承一个类 |  |
| super | 关键字 | 调用父类的构造函数, 在子类的方法中调用, 继承父类的方法 |  |

### 类的定义
```typescript
class Person {
	constructor(public name: string) { // 这种写法, 等于 this.name = name, 必须使用访问控制符
		// ...code
	}
	say() {
		console.log(`my name is ${this.name}`)
	}
}
let p = new Person('atom')
p.say()
```

### 类的继承
```typescript
class Person {
	constructor(protected name: string) { // 这种写法, 等于 this.name = name, 必须使用访问控制符
		console.log('Person 构造完成!')
	}
	say() {
		console.log(`My name is ${this.name}`)
	}
}

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

let atom = new Student('DC', 'atom', 21)

atom.introduction()
```

### 泛型(generic)
> 参数化的类型, 一般用来限制集合的内容.

### 接口(Interface)
> 用来建立某种代码约定, 使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定.
```typescript
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
```

## 模块(Module)
> 模块可以帮助开发者将代码分割为可重用的单元. 开发者可以自己决定将模块中的哪些资源(类, 方法, 变量)暴露出去供外部使用, 哪些资源只能在模块内部使用.
> **TypeScript**中, 一个文件就是一个模块.
> 参考es6.

### 关键字
- export: 导出
- import: 导入

## 注解(annotation)
> 注解为程序的元素(类, 方法, 变量)加上更直观更明了的说明, 这些说明信息与程序的业务逻辑无关, 而是供指定的工具或框架使用的.
> 参考框架**Angular**.

### 关键字
- @something

## 类型定义文件(*.d.ts)
> 类型定义文件用来帮助开发者在**TypeScript**中使用已有的**JavaScript**的工具包, 例如: **jQuery**.