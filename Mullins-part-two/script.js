    var vacationType = prompt("Enter vacation type, here are the choices: Musical, Tropical or Adventurous");
    var groupSize = prompt("How many people are in your group?");
    var destination;
    var travelSuggestion;
    if (vacationType == "Musical") {
        destination = "New Orleans";
    }
    else if(vacationType == "Tropical") {
        destination = "Beach Vacation in Mexico";
    }
    else if(vacationType == "Adventurous") {
        destination = "Whitewater Rafting in Grand Canyon";
    }
    else {
        console.log("Not a choice");
    }

    if (groupSize == 1 || groupSize == 2) {
        travelSuggestion = "First Class";
    }
    else if(groupSize >=3 || groupSize <=5) {
        travelSuggestion = "Helicopter";
    }
    else if(groupSize >=6) {
        travelSuggestion = "Charter Flight";
    }
    else {
        console.log("Not a choice.");
    }
    var message = "Since you're a group of " + groupSize + " going on a " + vacationType + " trip, you should take a " + travelSuggestion + " to " + destination + ".";
    console.log(message);
    
    