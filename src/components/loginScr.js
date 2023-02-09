console.log("hello world one")

let arr = [1,5,1,2,2,6,2,6,26,0,1,2];

let count = {};

arr.reduce((accumulator, currentValue, currentIndex, array) => {
    console.log(accumulator)
    if(count[currentValue]){
        count[currentValue]+= 1;
        console.log(currentValue)
        
    }else{
        count[currentValue] = 1;
        console.log(currentValue)
        console.log(currentValue)
    }
},0)

console.log(count) 