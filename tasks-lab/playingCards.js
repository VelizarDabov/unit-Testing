function solve(array){
let newArr =[];
const suitArr = ['S', 'H', 'D', 'C'];
const faceArr = ['2','3','4','5','6','7', '8','9','10','J', 'Q', 'K', 'A'];
let breakCounter = 0;
for(let i = 0; i < array.length; i++){
    let suit = array[i].substring(array[i].length - 1)
   
    let face = array[i].substring(0, array[i].length -1)
   if(faceArr.includes(face) && suitArr.includes(suit)){

switch(suit){
    case 'S': suit = `\u2660`;
    break;
    case 'H':suit = `\u2665`;
    break;
    case 'D':suit = `\u2666`;
    break;
    case 'C':suit =  `\u2663`;
    break;
 
}

newArr.push(face + suit)
}else{
    breakCounter++;
    return `Invalid card: ${array[i]}`;
    
}
}if(breakCounter = 0){
console.log( newArr.join(' '))
}

}
solve(['5S', '3D'])