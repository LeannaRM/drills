def ordered(words) 
    newarray = []
    for i in 0..words.length
        currentword = words[i]
        onlyvowels = ""
        for j in 0..currentword.length
            if currentword[j]== "a" || currentword[j]=="e" || currentword[j] == "i" || currentword[j] == "o" || currentword[j] == "u" || currentword[j]==" "
                onlyvowels = onlyvowels + currentword[j]
            end
        
        end

        if onlyvowels == "aeiou"
            newarray.push(currentword)
            puts newarray
        end
    end

    return newarray
end

input = ["absconder", "absconders", "absconding", "absconds", "abseil", "abseiled", "abseiling", "abseils", "absence", "absences", "absent", "absented", "absentee", "absenteeism", "absenteeisms", "absentees", "absenter", "absenters", "absenting", "absently", "absentminded", "absentmindedly", "absentmindedness", "absentmindednesses", "absents", "absinth", "absinthe", "absinthes", "absinths", "absolute", "absolutely", "absoluteness", "absolutenesses", "absoluter", "absolutes", "absolutest", "absolution", "absolutions", "absolutism", "absolutisms", "absolutist", "absolutistic", "absolutists", "absolutive", "absolutize", "absolutized", "absolutizes", "absolutizing", "absolve", "absolved", "absolver", "absolvers", "absolves", "absolving", "absonant", "absorb", "absorbabilities", "absorbability", "absorbable", "absorbance", "absorbances", "absorbancies", "absorbancy", "absorbant", "absorbants", "absorbed", "absorbencies", "absorbency", "absorbent", "absorbents", "absorber", "absorbers", "absorbing", "absorbingly", "absorbs", "absorptance", "absorptances", "absorption", "absorptions", "absorptive", "absorptivities", "absorptivity", "absquatulate", "absquatulated", "absquatulates", "absquatulating", "abstain", "abstained", "abstainer", "abstainers", "abstaining", "abstains", "abstemious", "abstemiously", "abstemiousness", "abstemiousnesses", "abstention", "abstentions", "abstentious", "absterge"]
result = ordered(input)

puts result