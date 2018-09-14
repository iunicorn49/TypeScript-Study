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