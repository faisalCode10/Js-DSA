// Make an array , define the position 
// using loop to delete element 
// delete element with text iput and button

// [10,20,30,12,19,92]
// we want to remove 30 how will we do that 
// We have two solution one is predefine funtion and one is we write our own logic 

// let data = [30,20,45,76,20,80]
// let position= 3

// for(let i=position; i<data.length-1; i++){
//         data[i]=data[i+1]
//     }
//     data.length=data.length-1;
//     console.log(data)



const RemoveElem = ()=>{
    let data = [30,20,45,76,20,80]
    let position= document.getElementById('position').value;
    position=parseInt(position2)

for(let i=position; i<data.length-1; i++){
        data[i]=data[i+1]
    }
    data.length=data.length-1;
    console.log(data)
}

