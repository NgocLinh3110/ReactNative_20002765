const dolphinsScores = [97, 112, 101]
const koalasScores = [109, 95, 106]

const dolphinsAverageScore = dolphinsScores.reduce((acc, item) => { return acc + item }) / 3
const koalasAverageScore = koalasScores.reduce((acc, item) => { return acc + item }) / 3

console.log('Dolphins Team Score: ' + dolphinsAverageScore.toFixed(2))
console.log('Koalas Team Score: ' + koalasAverageScore.toFixed(2))

if(dolphinsAverageScore > koalasAverageScore)
    console.log('Dolphins Team is the Winner!')
else if (dolphinsAverageScore < koalasAverageScore)
    console.log('Koalas Team is the Winner!')
else console.log('Draw!')


if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100)
    console.log('Dolphins Team is the Winner!')
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100)
    console.log('Koalas Team is the Winner!')


if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100)
    console.log(`Dolphins Team is the Winner!`)
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100)
    console.log(`Koalas Team is the Winner!`)
else if (Math.min(koalasAverageScore, dolphinsAverageScore) >= 100)
    console.log(`Draw!`)
else
    console.log(`No team is the Winner!`)