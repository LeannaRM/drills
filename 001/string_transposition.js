//RUN IT TWICE!!!
function stringTransposition(listOfWords){
    var longest = 0;

    for(var k=0; k<listOfWords.length; k++){

        if (listOfWords[k].length > longest) {
            longest = listOfWords[k].length;
        }
    }

    
    for(var i = 0; i < longest; i++){
        var line = " ";
        for (var j = 0; j< listOfWords.length; j++){
            
            var currentWord = listOfWords[j];
            if (currentWord.charAt(i) == ""){ 
                line = line + " ";}
            else{
            line = line + currentWord.charAt(i);
            }
        }

        console.log(line);
    }
    
    return [];
}

var testInput1 = ["Hello, World!"];
var result1    = stringTransposition(testInput1);

var testInput2 = ["Kernel", "Microcontroller", "Register", "Memory", "Operator"];
var result2    = stringTransposition(testInput2);

