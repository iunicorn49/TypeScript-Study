let username: string = 'nameless'

function defaultValue(a: string, b: string, c: string = 'jojo'): void {
	console.log('a:', a)
	console.log('b:', b)
	console.log('c:', c)
}

defaultValue('A', 'B', 'C')
defaultValue('A', 'B')