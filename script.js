console.log("Understand Array ion JS")

let arr = [1, 2, 3, 4, 5]
arr[2] = 455;
// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[2])
// console.log(arr[3])
// array in string  form 
// delete element 
delete arr[3]
console.log(arr.toString())
// join method 
console.log(arr.join(" and "))
// pop method 
let arr1 = [2, 4, 6, 8, 9]
arr1.pop()
// push method  also push string name
arr1.push(50)
//shift method
arr1.shift()
//unnshift method
arr1.unshift("jalal")

console.log(arr1)
// concat method 
let a= [1, 2, 3]
let b= [4, 5, 6]
let c= [7, 8, 9]

//  return another array tha combine Element
console.log(a)

// sort method
// splice method 
let num= [1,3,5,7]
num.slice(1, 3)
// console.log(num)

//slice method
const num2 = [1, 2, 3, 4]
num2.slice(2)
num2.slice(1, 3)
// console.log(num2)
// reverce method  reverse the array

//map, filter and feduce array method
let arr5 = [1, 13, 5, 7, 9];

// let newArr = []
// for (let index = 0; index < arr5.length; index++) {
//     const element = arr5[index];
//     newArr.push(element**2)
// }

let newArr = arr5.map((e, index, array)=>{
    return e**2
})
console.log(newArr);
