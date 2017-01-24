function change(amount) { 
    var quarter = 0.25;
    var dime = 0.10;
    var nickel = 0.05;
    var penny = 0.01;    

    var numQ = Math.floor(amount/quarter);
    var newamount = amount - numQ*quarter;
    
    var numD = Math.floor(newamount/dime);
    newamount = newamount - numD*dime;

    var numN = Math.floor(newamount/nickel);
    newamount = newamount - numN*nickel;

    var numP = Math.floor(newamount.toFixed(2)/penny);
    newamount = newamount - numP*penny;

    var results = {Quarters: numQ, Dimes: numD, Nickels: numN, Pennies: numP };
    // var results = "test";
    return results;
}

//var testInput1 = 10.24;
//var result1    = change(testInput1);

var testInput2 = 0.99;
var result2    = change(testInput2);

//var testInput3 = 5;
//var result3    = change(testInput3);

//var testInput4 = 0.06;
//var result4    = change(testInput4);

//console.log(result1);
console.log(result2);
//console.log(result3);
//console.log(result4);