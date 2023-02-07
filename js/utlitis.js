function pinGenerate(){

    const  pinGenerateRandom = Math.round(Math.random() * 10000);
    
    return pinGenerateRandom;
}

function getPin() {
    const pin = pinGenerate();

    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();

    }
}
