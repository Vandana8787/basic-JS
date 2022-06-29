
function CalculateSum(numArray) {
    const sum = numArray.reduce((prev, next) => {
        return prev + next
    }, 0);
    return sum;
}

const total = CalculateSum([10, 20, 30, 40, 50]);
console.log(' Sum with Reduce function ', total);

const total2 = CalculateSum([-10, 20, -30, 40, 50]);
console.log(' Sum with Reduce function ', total2);
