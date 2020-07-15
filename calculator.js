var clear = false;
var result = "";
var calc = "";

$(document).ready(function() {
  $("button").click(function() {
    var text = $(this).attr("value");
    if (parseInt(text, 10) == text ||
                      text === "%" ||
                      text === "/" ||
                      text === "*" ||
                      text === "-" ||
                      text === "+" ||
                      text === ".") {
      if (clear === false) {
        calc += text;
        $(".textBox").val(calc);
      } else {
        calc = text;
        $(".textBox").val(calc);
        clear = false;
      }
    }

    switch (text) {
      
      case "C":
        calc = "";
        $(".textBox").val("");
        break;
      case "CE":
        calc = calc.slice(0, -1);
        $(".textBox").val(calc);
        break;
      case "=":
        result = eval(calc);
        $(".textBox").val(result);
        clear = true;
        break;
      case "+/-":
        if (clear === false) {
          calc = calc * -1;
          $(".textBox").val(calc);
        } else {
          result = result * -1;
          $(".textBox").val(result);
        }
        break;
    }
  });
});