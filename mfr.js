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

// filter method 
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
return false

}
console.log(arr.filter(greaterThanSeven))

// redeuce method 
let arr2 = [1,2,3,4,5,6,7]

const redu = (a, b)=>{
    return a+b
}
console.log(arr2.reduce(redu))