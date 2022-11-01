// make an array
// use loop to search an element
// Using Searching algorithm


// let data = [20,40,60,5,10,70,0,99]

// let search = 70;
// let index = []

// for(let i=0; i<data.length-1; i++){
//     if(data[i]===search){
//         index=i
//         break;
//     }
// }

// console.log(index)
// console.log(data.indexOf(search))
// data.splice(2,1)
// console.log(data)


// Get index no using DOM
const searchELem = ()=>{
    let data = [20,40,60,5,10,70,0,99]

    let item = document.getElementById('SearchEl').value 
    let index = undefined
    for(let i=0; i<data.length-1; i++){
    if(data[i]==item){
        index=i
        break;
    }
}
    console.log(index)
}



// Find Duplicate value in array 
// const a = [4,3,6,3,4,3]

// function count_duplicate(a){
//  let counts = {}

//  for(let i =0; i < a.length; i++){ 
//      if (counts[a[i]]){
//      counts[a[i]] += 1
//      } else {
//      counts[a[i]] = 1
//      }
//     }  
//     for (let prop in counts){
//         if (counts[prop] >= 2){
//             console.log(prop + " counted: " + counts[prop] + " times.")
//         }
//     }
//   console.log(counts)
// }

// count_duplicate(a)


