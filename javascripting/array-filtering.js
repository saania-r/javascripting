let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function saania (number) {  
  console.log(number)
  return number % 2 === 0  
}  
let filtered = numbers.filter(saania)
console.log (filtered)