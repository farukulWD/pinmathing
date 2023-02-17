
function genaretPin(){
    const randomNum = Math.round(Math.random()*10000);
    return randomNum;
}
function pin(){
    let pin = genaretPin();
    const pinString = pin + "";
    if (pinString.length === 4) {
        return pin;
    }else{
       return pin();
    }
}

function getInputValueById(elementId) {
    const inputElement = document.getElementById(elementId).value;
    return inputElement;

}
function setInnerValue(elementId, value) {
    const inputElement = document.getElementById(elementId);
    inputElement.value = value;
}

document.getElementById('pin-genaret-btn').addEventListener('click', function(){
   let pinNumber = pin();
//    const showPinBox = getInputValueById("showPin");
   setInnerValue("showPin", pinNumber);

})


document.getElementById("calculator").addEventListener('click', function(e){
    const number = e.target.innerText;
    let typedField = document.getElementById('showNmber');
    let previousNumber = typedField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedField.value = '';
        }else if (number === '<'){
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedField.value = remainingDigits;
        }
    }else{
        const newTypedNumber = previousNumber + number;
        typedField.value = newTypedNumber;
    }
});


document.getElementById('submitbtn').addEventListener('click', function(){
   const genaretPinNumber = getInputValueById('showPin');
   const userPinNumber = getInputValueById('showNmber');

   let userPinField = document.getElementById('showNmber');
   let genaretPinField = document.getElementById('showPin');

   const successMesage = document.getElementById('success');
   const failurMesage = document.getElementById('fail');

   if (genaretPinNumber === userPinNumber) {
    successMesage.style.display = "block";
    failurMesage.style.display = "none";
   }else{
    failurMesage.style.display = "block";
    successMesage.style.display = "none";
   }

   genaretPinField.value = '';
   userPinField.value = '';
})