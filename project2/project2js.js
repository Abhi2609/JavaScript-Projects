const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI = ${BMI}</span>`;

        const classification = document.querySelector('#bmi-classification');
        if(BMI < 18.6){
            classification.innerHTML = `You are UNDER WEIGHT`;
        }

        else if(BMI >= 18.6 && BMI < 24.9){
            classification.innerHTML = `You are HEALTHY`;
        }

        else{
            classification.innerHTML = `You are OVER WEIGHT`;
        }
    }
});