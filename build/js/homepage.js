let button1 = document.getElementById('BMIbtn');

button1.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output1');
    const bmiOutput = document.getElementById('BMIoutput');
    bmiOutput.style.display = "block";
    let height_status = false, weight_status = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Under weight : ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal : ' + bmi;
        } else {
            result.innerHTML = 'Over weight : ' + bmi;
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});


let button2 = document.getElementById('Lossbtn');
let isShowingAll = false;

button2.addEventListener('click', () => {
    const LossOutput = document.getElementById('MoreLoss');

    if (isShowingAll) {
        LossOutput.style.display = "none";
        button2.innerHTML = "Show All";
    } else {
        LossOutput.style.display = "inline";
        button2.innerHTML = "Show Less";
    }

    isShowingAll = !isShowingAll;
});


let button3 = document.getElementById('Gainbtn');
let isShowingAll_1 = false;

button3.addEventListener('click', () => {
    const GainOutput = document.getElementById('MoreGain');

    if (isShowingAll_1) {
        GainOutput.style.display = "none";
        button3.innerHTML = "Show All";
    } else {
        GainOutput.style.display = "inline";
        button3.innerHTML = "Show Less";
    }

    isShowingAll_1 = !isShowingAll_1;
});
function sendEmail() {
    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "body.balance.bites@gmail.com",
    //     Password : "CAF8660BB549FF5C9804866F3032359D519D",
    //     From : "body.balance.bites@gmail.com",
    //     To : 'body.balance.bites@gmail.com',
    //     Subject : "This is the subject",
    //     Body : "Message :" +document.getElementById("message").value    
    // }).then(
    //   message => alert(message)
    // );
    Email.send({
        SecureToken : "b5ea760a-afb3-421f-b91b-56b4c592ed44",
        To : 'body.balance.bites@gmail.com',
        From : "body.balance.bites@gmail.com",
        Subject : "Users feedback",
        Body : "Message :" +document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}
