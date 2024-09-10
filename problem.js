function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || income<expenses){
        return "Invalid Input"
    }
    const tax= (income-expenses) * 0.20;
    return tax;
}






function sendNotification(email) {
    if (email.includes('@') === false) {
        return 'Invalid Email';
    }
    const divide = email.split('@');
    const username = divide[0];
    const domain = divide[1];
    const result = username + ' sent you an email from ' + domain;
    return result;
}

 





function checkDigitsInName(name) {
    if(typeof name !=='string'){
        return 'Invalid Input';
    }
    let number = ['0','1','2','3','4','5','6','7','8','9'];
    for(let char of name){
        if(number.includes(char) === true){
            return true;
        }
    }
    return false; 
}


   








function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }
    let result = 0;
    if(obj.testScore <= 50 && obj.schoolGrade <=30){
        if(obj.isFFamily === true){
             result = obj.testScore + obj.schoolGrade + 20;
        }
        else{
             result = obj.testScore + obj.schoolGrade;
        }
    }
    if(result >= 80){
        return true;
    }
    else{
        return false;
    }
}








function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || isNaN(serialNumber)) {
        return 'Invalid Input';
    }

    let result = 0;
    if (serialNumber > waitingTimes.length) {
        for (let num of waitingTimes) {
            result = result + num;
        }

        let avg = Math.round(result / waitingTimes.length);
        let remainingSerial = (serialNumber - 1) - waitingTimes.length;
        const remainingTime = remainingSerial * avg;
        return remainingTime;
    }
}



