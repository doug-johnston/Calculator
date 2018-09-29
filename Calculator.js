var input1, input2, operator, selOp;
input1 = document.querySelector("#input1");
input2 = document.querySelector("#input2");
operator = document.querySelector('select');
selOp = operator.selectedIndex;


console.log(input1,input2, selOp);

var calculate = function() {
    selOp = operator.selectedIndex;
    var calc = 0;
    if (selOp == 0){
        console.log('addition');
        calc = Number(input1.value) + Number(input2.value);
        console.log(calc);
    }
    if (selOp == 1){
        console.log('subtraction');
        calc = Number(input1.value) - Number(input2.value);
        console.log(calc);
    }
    if (selOp == 2){
        console.log('multiplication');
        calc = Number(input1.value) * Number(input2.value);
        console.log(calc);
    }
    if (selOp == 3){
        console.log('division');
        calc = Number(input1.value) / Number(input2.value);
        console.log(calc);
    }
    document.getElementById("result").innerHTML = calc;
}

document.querySelector("button").addEventListener("click", calculate);

