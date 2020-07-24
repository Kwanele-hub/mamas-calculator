function getHistory(){
    return document.getElementById("history-value").innerText
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function printOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
    document.getElementById("output-value").innerText=getFormattedNumber (num);
}
else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);
}

}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator =document.getElementsByClassName("operator");
for (var i =0;i<operator.length;i++)
operator[i].addEventListener('click',function(){
    if(this.id=="clear"){
        printHistory("");
        printOutput("");
    }
    if(this.id=="backspace"){
        var output=reverseNumberFormatted(getOutput).toString();
        if(output){
            output= output.substr(0,output.length-1);
        }
    }
else{
    var output=getOutput();
    var history=getHistory();
    if (output!=""){
        output=reverseNumberFormatted(output);
        history=history+output;
        if(this.id=="="){
            var result=eval(history);
            printOutput(result);
            printHistory("");
        }
        else{
            history=history+this.id;
            printHistory(history);
            printOutput("");
        }
    }
}

});
var n = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    Number[i] .addEventListener('click',function(){
        var output=reverseNumberFormatted(getOutput());
        if (output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    })
        

}
