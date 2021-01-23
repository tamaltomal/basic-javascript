// https://github.com/tamaltomal/basic-javascript

function kilometerToMeter(km){
    if(typeof(km) == 'number' && km > -1){
        let distance = km * 1000;
        return distance;
    }
    else{
        return "Please enter a valid positive number."; //catching invalid inputs
    }
}


function budgetCalculator(watch, phone, laptop){
    if(typeof(watch) == 'number' && watch > -1 && typeof(phone) == 'number' && phone > -1 && typeof(laptop) == 'number' && laptop > -1){
        budget = (watch * 50) + (phone * 100) + (laptop * 500);
        return budget;
    }
    else{
        return "Please enter three valid numbers seperated by commas."; //catching invalid inputs
    }
}


function hotelCost(days){
    if(days >= 0 && days < 11){
        let cost = days * 100; //first slot
        return cost;
    }
    if(days >= 11 && days < 21){
        let cost = (10 * 100) + ((days - 10) * 80); //second slot
        return cost;
    }
    if(days > 20){
        let cost = ((10 * 100) + (10 * 80) + ((days - 20) * 50)); //third slot
        return cost;
    }
    else{
        return "Please enter valid number of days."; //catching invalid inputs
    }
}


function megaFriend(names){
    if(names.length == 0){
        return "You have no friend :-("; //Detecting unsocial person
    }
    else{
        for(let i = 0; i < names.length; i++){
            if(typeof(names[i]) != 'string'){
                return "Please enter valid string as names."; //Detecting snkeay person
                break;
            }
        }
        let nameSize = 0;
        let gigaFriend;
        for(let i = 0; i < names.length; i++){
            if(nameSize < names[i].length){ //Comparing name sizes
                nameSize = names[i].length;
                gigaFriend = names[i]; //Storing larger names
            }
        }
        return gigaFriend; //Returning the first occurence of largest names
    }
}