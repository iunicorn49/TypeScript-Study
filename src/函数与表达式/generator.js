// generator 当前 TS版本并不支持

// function* 来声明, 自带一个 next() 方法, 每次调用, 会在 yield 关键字前打断, 直到下一次 next()
function* fn() {
	console.log('start')
	yield
	console.log('finish')
}

let fun1 = fn()

// fun1.next() // start
// fun1.next() // finish

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