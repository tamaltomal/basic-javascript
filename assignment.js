// https://github.com/tamaltomal/basic-javascript

function kilometerToMeter(km){
    if(typeof(km) == 'number' && km > -1){
        let distance = km * 1000;
        return distance;
    }
    else{
        return "Please enter a valid positive number.";
    }
}

function budgetCalculator(watch, phone, laptop){
    if(typeof(watch) == 'number' && watch > -1 && typeof(phone) == 'number' && phone > -1 && typeof(laptop) == 'number' && laptop > -1){
        budget = (watch * 50) + (phone * 100) + (laptop * 500);
        return budget;
    }
    else{
        return "Please enter three valid numbers seperated by commas.";
    }
}