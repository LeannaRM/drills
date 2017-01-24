function ordered(words) {
    var newarray = [];

    for(var i=0; i < words.length; i++){
        var currentword = words[i];
        var onlyvowels = "";
        for(var j = 0; j< currentword.length; j++){
            if (currentword[j]== "a" || currentword[j]=="e" || currentword[j] == "i" || currentword[j] == "o" || currentword[j] == "u" || currentword[j]==" "){
                onlyvowels = onlyvowels + currentword[j];
            }
        
        }
        if (onlyvowels == "aeiou"){
            newarray.push(currentword);
        }
    }

    return newarray;
}

var input = ["absconder", "absconders", "absconding", "absconds", "abseil", "abseiled", "abseiling", "abseils", "absence", "absences", "absent", "absented", "absentee", "absenteeism", "absenteeisms", "absentees", "absenter", "absenters", "absenting", "absently", "absentminded", "absentmindedly", "absentmindedness", "absentmindednesses", "absents", "absinth", "absinthe", "absinthes", "absinths", "absolute", "absolutely", "absoluteness", "absolutenesses", "absoluter", "absolutes", "absolutest", "absolution", "absolutions", "absolutism", "absolutisms", "absolutist", "absolutistic", "absolutists", "absolutive", "absolutize", "absolutized", "absolutizes", "absolutizing", "absolve", "absolved", "absolver", "absolvers", "absolves", "absolving", "absonant", "absorb", "absorbabilities", "absorbability", "absorbable", "absorbance", "absorbances", "absorbancies", "absorbancy", "absorbant", "absorbants", "absorbed", "absorbencies", "absorbency", "absorbent", "absorbents", "absorber", "absorbers", "absorbing", "absorbingly", "absorbs", "absorptance", "absorptances", "absorption", "absorptions", "absorptive", "absorptivities", "absorptivity", "absquatulate", "absquatulated", "absquatulates", "absquatulating", "abstain", "abstained", "abstainer", "abstainers", "abstaining", "abstains", "abstemious", "abstemiously", "abstemiousness", "abstemiousnesses", "abstention", "abstentions", "abstentious", "absterge"];
var result = ordered(input);

console.log(result);
