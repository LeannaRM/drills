def change(amount)
    quarter = 0.25
    dime = 0.10
    nickel = 0.05
    penny = 0.01    

    numQ = (amount/quarter).floor
    newamount = amount - numQ*quarter
    
    numD = (newamount/dime).floor
    newamount = newamount - numD*dime

    numN = (newamount/nickel).floor
    newamount = newamount - numN*nickel

    numP = (newamount.round(2)/penny).floor
    newamount = newamount - numP*penny

    results = {"Quarters" => numQ, "Dimes" => numD, "Nickels" => numN, "Pennies" => numP }
    return results;
end

testInput1 = 10.24;
result1    = change(testInput1);

testInput2 = 0.99
result2    = change(testInput2)

testInput3 = 5;
result3    = change(testInput3);

testInput4 = 0.06;
result4    = change(testInput4);

puts result1
puts result2
puts result3
puts result4