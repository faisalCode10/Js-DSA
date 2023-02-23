// let data = [34,3,23,1,6,2,33,21,5,8,4,7,9]
let data = [40, 34, 12 ,25]

for(i=0; i<data.length; i++){
    for(j=0; j<data.length; j++){
        if(data[j] > data[j+1]){
            let temp = data[j]
            data[j]= data[j+1]
            data[j+1]=temp
        }
    }
}
console.log(data)