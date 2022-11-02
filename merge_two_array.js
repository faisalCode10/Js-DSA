// Make three arrays
// use 2 diffrent loop to merge element 

let data = [3,7,12,34,56,90]
let data2=[20,30,40,50,100]
let data3= []


for(let i=0; i<data.length; i++){
    data3[i]=data[i]
}
for (let i=0; i<data2.length; i++){
    // console.log(data.length+i)
    data3[data.length+i]=data2[i]
}

console.log(data3)

