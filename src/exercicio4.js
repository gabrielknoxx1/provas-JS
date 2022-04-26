"A)"
let numbers = [2, 32, 54, 12, 09, 19, 80];
numbers.sort((a, b) => a - b)
console.log(numbers)
"B)"
let numbers1 = [2, 32, 54, 12, 09, 19, 80]
numbers1.sort((a, b) => b - a)
console.log(numbers1)
"C)"
let numbers2 = [2, 32, 54, 12, 09, 19, 80]
let soma = 0

for (let i = 0; i < numbers2.length; i++) {
  soma += numbers2[i]
}
console.log(soma)