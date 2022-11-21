// // Make three arrays
// // use 2 diffrent loop to merge element 

// let data = [3,7,12,34,56,90]
// let data2=[20,30,40,50,100]
// let data3= []


// for(let i=0; i<data.length; i++){
//     data3[i]=data[i]
// }
// for (let i=0; i<data2.length; i++){
//     // console.log(data.length+i)
//     data3[data.length+i]=data2[i]
// }

// console.log(data3)


// merging 2 array using shortcut
// let arr = [12,3,4,5,76,56,56,67]
// let arr2= [300,400,500,600]
// let arr3=[...arr, ...arr2]
// console.log(arr3)
// console.log(arr.reverse())



// Merge two arrays using while loop
// it will be a complex method but it is the best methd to merge two arrays 

let arr1 = [3,7,12,34,5,90]
let arr2 = [4,9,25,45]
let arr3 = []
let d1 = 0;
let d2 =0;
let d3 =0;

while (d1<arr1.length && d2<arr2.length) {
    if (arr1[d1]<arr2[d2]) {
        arr3[d3]=arr1[d1];
        d1++;
    }else{
        arr3[d3]=arr2[d2];
        d2++;
    }
    d3++
}

console.log(arr3)