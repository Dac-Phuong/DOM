let operand1 = "";
let operand2 = "";
let opt
function buttonHandler(btn) {
    const pressedValue = btn.innerText;
    const resultInput = document.getElementById("input");

    if(isNaN(pressedValue)){
        if(pressedValue == "C"){
            operand1 = "";
            operand2 = "";
            opt = undefined;
            resultInput.value = "";
            return;
        }
        if(pressedValue == '='){
            const result = preform(operand1,operand2,opt)
            resultInput.value = result ;
            operand1 = "";
            operand2 = '';
            opt = undefined;
        }
        else{
            opt = pressedValue;
        }
    }else{
        if(opt){
            operand2 += pressedValue;
            resultInput.value = operand2;
        }else{
            operand1 += pressedValue;
            resultInput.value = operand1;
        }
    }
}
function preform(orand1,orand2,otor){
    orand1 = Number(orand1);
    orand2 = Number(orand2);

    switch(otor){
        case '+':
            return orand1 + orand2 ;
        case '-':
            return orand1 - orand2 ;
        case 'x':
            return orand1 * orand2 ;
        case '/':
            return orand1 / orand2 ;
    }
}