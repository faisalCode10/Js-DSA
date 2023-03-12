// const apple = (x)=>{
//     console.log(x)
//     if (x<5) {
//         apple(x+1)
//     }
    
// }
// let data = 0;

// apple(data)


// Find a factorial without using loops


const factorial = (num)=>{  
    if(num== 0){
        return 1
    }
    // return num
    return num * factorial(num-1)
}
let data = prompt("Enter the number to find the factorial")

// // This will give us the same output as above
// // console.log(5*factorial(5-1)*factorial(4-1)*factorial(3-1)*factorial(2-1)*factorial(1-1))


console.log(factorial(data))




// looping through string array

// let data = ["batman", "spider man", "iron man", "vision", "thor"]

// let i = 0;

// while(i<data.length){
//     console.log(data[i])
//     i++
// }


