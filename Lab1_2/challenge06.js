const bill = [125,555,44]
const tip = bill.map(calcTip)   
function calcTip(bill){
    if(bill >= 50 && bill <= 300)
       return bill*0.15
    else
         return bill*0.2
}
const total = bill.map(bill => bill + calcTip(bill))

console.log(`Bill: ${bill} Tip: ${tip} Total: ${total}`) 