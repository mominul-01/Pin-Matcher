document.getElementById('btn-pin-generate').addEventListener('click', function () {
   
    const pin = getPin();
    const setPin = document.getElementById('input-pin-filed');
    setPin.value = pin;

})

document.getElementById('calculaor').addEventListener('click', function (event) {
    

    const character = event.target.innerText;
    
    const typeCharacterField = document.getElementById('input-character-filed')
    const previousCharacter = typeCharacterField.value;

    if (isNaN(character)) {
        if (character === 'C') {
            typeCharacterField.value = '';

        }
        else if (character === '<') {
            const digits = previousCharacter.split('');
            digits.pop();
            const remaininDigits = digits.join('');
            typeCharacterField.value = remaininDigits;

            
        }
    }
    else {
        const newTypeNumber = previousCharacter + character;
        typeCharacterField.value = newTypeNumber;

    }
    


})

document.getElementById('btn-submit').addEventListener('click', function () {
    

    const previousPinId = document.getElementById('input-pin-filed');
    const previousPin = previousPinId.value;
    const newPinId = document.getElementById('input-character-filed')
    const newPin = newPinId.value;

    const successMgs = document.getElementById('success');
    const failerMgs = document.getElementById('failer');

    if (newPin === previousPin) {
        successMgs.style.display = 'block';
        failerMgs.style.display = 'none';
        
    }
    else {
        failerMgs.style.display = 'block';
        successMgs.style.display = 'none';
        
    }
})