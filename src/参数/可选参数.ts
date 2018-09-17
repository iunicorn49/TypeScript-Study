function fn(a: string, b?: string, c: string = 'jojo'): void {
	console.log('a:', a)
	b && console.log('b:', b)
	console.log('c:', c)
}

fn('A')
fn('A', 'B')