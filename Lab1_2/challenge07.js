const mark={
    name: "Mark Miller",
    mass: 78,
    height: 1.69
}
const john={
    name: "John Smith",
    mass: 92,
    height: 1.95
}

function calcBMI(mass, height){
    return ( mass / (height * height)).toFixed(2);
}

const BMIOfMark = calcBMI(mark.mass, mark.height);
const BMIOfJohn = calcBMI(john.mass, john.height);

if(BMIOfMark > BMIOfJohn)
    console.log(` Mark's (${BMIOfMark}) BMI is higher than John's(${BMIOfJohn})!`);
else
    console.log(` John's (${BMIOfJohn}) BMI is higher than Mark's(${BMIOfMark})!`);