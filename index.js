function solve(){
    //were using parseFloat to get the floating point data from the input fields
    var first = parseFloat(document.getElementById("firstnum").value);
    var second = parseFloat(document.getElementById("secondnum").value);
    var unit = document.getElementById("units").value;
    var first2 = first ** 2;
    var second2 = second ** 2;
    var answer = first2 + second2;
    //use Math.sqrt function to get the square root of the hypotenuse
    var c = parseFloat(Math.sqrt(answer));
    //updating the inner html
    document.getElementById("answer").innerHTML = "c^2 = " + answer + unit;
    document.getElementById("or").style = "display: inline";
    document.getElementById("c").innerHTML = "c = " + c + unit;
    document.getElementById("steps").innerHTML = "steps: find the square of a and b, add them together, then square root them";
    document.getElementById("summary").innerHTML = "Summary: √("+ first2 + " + " + second2 + ")" + " = " + c + unit;
    document.getElementById("alsoSee").style = "opacity: 1";
}
function circumference(){
    var first = parseFloat(document.getElementById("firstnum").value);
    var second = parseFloat(document.getElementById("secondnum").value);
    var unit = document.getElementById("units").value;
    var first2 = first ** 2;
    var second2 = second ** 2;
    var answer = first2 + second2;
    var c = parseFloat(Math.sqrt(answer));
    var circumference = first + second + c;
    //updating inner html
    document.getElementById("answer").innerHTML = "circumference = " + circumference + unit;
    document.getElementById("or").style = "display: none";
    document.getElementById("c").innerHTML = " ";
    document.getElementById("steps").innerHTML = "steps: find the sum of a + b + c";
    document.getElementById("summary").innerHTML = "Summary:  " + first + " + " + second + " + " + c + "=" + circumference + unit;
    
}
function area(){
    var first = parseFloat(document.getElementById("firstnum").value);
    var second = parseFloat(document.getElementById("secondnum").value);
    var unit = document.getElementById("units").value;
    var area = 0.5 * first * second;
    //updating inner html
    document.getElementById("answer").innerHTML = "area = " + area + unit + "²";
    //if the user chose to use the unit of "none" the app gets rid of the ² symbol in the answer
    if (document.getElementById("units").value == " ") {
        document.getElementById("answer").innerHTML = "area = " + area;
    }
    document.getElementById("or").style = "display: none";
    document.getElementById("c").innerHTML = " ";
    document.getElementById("steps").innerHTML = "steps: time a and b, then divide them by 2";
    document.getElementById("summary").innerHTML = "Summary:  " + first + "x" + second + "/2" + "=" + area + unit + "²";
    //if the user chose to use the unit of "none" the app gets rid of the ² symbol in the summary
    if (document.getElementById("units").value == " ") {
        document.getElementById("summary").innerHTML = "Summary:  " + first + "x" + second + "/2" + "=" + area + unit;
    }
}