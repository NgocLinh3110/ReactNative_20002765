const dolphinsScores1 = [44, 23, 71]
const koalasScores1 = [65, 34, 49]
const dolphinsScores2 = [85, 54, 41]
const koalasScores2 = [23, 34, 27]

const calcAverage = (...scores) => scores.reduce((acc, num) => acc + num) / scores.length;

const dolphinsAverageScore1 = calcAverage(...dolphinsScores1)
const koalasAverageScore1 = calcAverage(...koalasScores1)
const dolphinsAverageScore2 = calcAverage(...dolphinsScores2)
const koalasAverageScore2 = calcAverage(...koalasScores2)

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2)
        console.log('Dolphins win (${avgDolphins} vs. ${avgKoalas})')
    else if (avgKoalas >= avgDolphins * 2)
        console.log('Koalas win (${avgKoalas} vs. ${avgDolphins}')
    else console.log('No team wins!')
}

checkWinner(dolphinsAverageScore1, koalasAverageScore1)
checkWinner(dolphinsAverageScore2, koalasAverageScore2)