function getBMI(mass, height){
    return mass / (height * height)
}

const john = {
    mass: 1.75,
    height: 85
}

const mark = {
    mass: 1.88,
    height: 95
}

// const john = {
//     mass: 1.95,
//     height: 92
// }

// const mark = {
//     mass: 1.69,
//     height: 78
// }

const bmiOfJohn = getBMI(john.mass, john.height)
const bmiOfMark = getBMI(mark.mass, mark.height)

const markHigherBMI = bmiOfMark > bmiOfJohn

if(markHigherBMI)
    console.log('Mark has the BMI (${bmiOfMark.toFixed(2)}) higher than John (${bmiOfJohn.toFixed(2)})')
else
    console.log('John has the BMI (${bmiOfJohn.toFixed(2)}) higher than Mark (${bmiOfMark.toFixed(2)})')
