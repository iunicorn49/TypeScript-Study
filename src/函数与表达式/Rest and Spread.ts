function fn(...args): void {
	args.forEach(arg => {
		console.log(arg)
	})
}

// fn('a', 'b', 'c')

// typescript 并不支持, javascript 可以支持
function fn2(a, b, c) {
	console.log('a', a)
	console.log('b', b)
	console.log('c', c)
}

let args = ['A', 'B', 'C']
// fn2(...args)