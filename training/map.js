// map method
// Pure Function 
// Input + Process + Output
function GetSquare(numArray) {
    const squre = function(number){
        return number * number;
    }
    const squreNumber = numArray.map(squre);
    return squreNumber;
}
const numArrayinput = [3,4,6,7];
const squareOutput = GetSquare(numArrayinput);
console.log('This is Square Array', squareOutput);

const squareOutput2 = GetSquare([10,20,30,50,60]);
console.log('This is Square Array', squareOutput2);