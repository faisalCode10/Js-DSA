let data = [9,45,1,7,23,7,78,0,11,41,77];
// for(let i=0; i<data.length; i++){
//     console.log(`${data[i]}`)
// }


let x= 3;
console.log(data[x])


const getElement = ()=>{
    let el = document.getElementById('element').value
    if(el<data.length && typeof parseInt(el)=='number' && el>0){
        alert(data[el])
    }else{
        alert("please enter a valid input")
    }
}
