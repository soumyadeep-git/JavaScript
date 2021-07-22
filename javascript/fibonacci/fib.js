

let firstIndex = 0, secondIndex = 1, count, nextDigit;
console.log(firstIndex);
console.log(secondIndex);
for (count = 0; count <= 10; count++) {    //10 here means that it will the loop will iterate upto 10 times 
    nextDigit = firstIndex + secondIndex;
    console.log(nextDigit);
    firstIndex = secondIndex;
    secondIndex = nextDigit;
}








