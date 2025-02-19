let arr = [1, 34, 56, 78, 90]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }
//for-each loop
// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// for-in loop
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//     }
// } 

// for-of loop is directly for arrays 

for (const value of arr) {
    console.log(value)
}

// let arr5 = [1, 13, 5, 7, 9];

// let newArr = []
// for (let index = 0; index < arr5.length; index++) {
//     const element = arr5[index];
//     newArr.push(element**2)
// }
// console.log(newArr);



