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