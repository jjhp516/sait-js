// 9 times table using while loop
function nineTimesTable() {
    var number = 1;
    while (number < 13) {
            console.log(9 + "x" + number + " = " + 9*number);
            number++;
        }
}

// 12 x 12 times table using nested while loops
function twelveTimesTable() {
    var number = 1;

    while (number < 13) {
        var counter = 1;
        while (counter < 13) {
            console.log(counter + "x" + number + " = " + counter*number);
            counter++;
        }

        number ++;
    }
}



// 9 times table using for loop
function forTimesTable_9() {
    for(var i = 1; i <= 12; i++) {
        console.log(9 + "x" + i + " = " + 9*i);
    }
}



// 12 x 12 table with for loops
function forTimesTable_12() {
    for(var factor1 = 1; factor1 <= 12; factor1++) {
        for(var factor2 = 1; factor2 <= 12; factor2++) {
            console.log(
                factor1 + "x" + factor2 + " = " + factor1*factor2);
        }            
    }
}



//Checks if the number from 0 to 20 is even or odd and outputs to screen
function evenOrOdd_20() {
    for(var num = 0; num <= 20; num++) {
        if(num % 2 === 0) {
            console.log(num + " is an even number");
        } else {
            console.log(num + " is an odd number");
        }
    }
}


// break loop before printing out number 6
function stupid6TimesTable() {
    for(var factor1 = 1; factor1 <= 12; factor1++) {
        for(var factor2 = 1; factor2 <= 12; factor2++) {
            if(factor2 === 6) {
                console.log("I hate number " + factor2);
                break;
            }
            console.log(factor1 + "x" + factor2 + " = " + factor1*factor2);
        }
        // break;
    }
}


// array
function favoriteFoodsList() {
    var favFoods = ["chicken", "tofu", "ramen", "sushi", "pizza"];
    console.log(typeof favFoods);
    console.log(favFoods.length);
    console.log(favFoods);
// log 3rd item in array
    console.log(favFoods[2]);
// change 3rd item in array
    favFoods[2] = "kimchi";
    console.log(favFoods);
// add new item to array
    favFoods.push("salmon");
    console.log(favFoods);

    for(var i=0; i<favFoods.length; i++) {
        console.log(favFoods[i]);
    }
}

// obejct
function favRecipe() {
    var recipe = {
        recipeTitle: "Scrambled Eggs",
        recipeDescription: "Delicious scrambled eggs",
        ingredients: ["4 eggs", "1/4 cup milk", "2 tsp. butter", "salt", "pepper"],
        directions: [
            "1. Beat eggs, milk, salt and pepper in bowl until blended.",
            "2. Heat butter in pan over medium heat until hot.",
            "3. Pour in egg mixture.",
            "4. As eggs begin to set, gently pull across the pan with a spatula to form large soft curds.",
            "5. Continue cooking while pulling, lifting and folding eggs until thickened and no visible liquid egg remains.",
            "6. Remove from heat and serve immediately." ],
        rating: 3.5,
        cookTime: {minutes: 04}
    }
    console.log(recipe);

    // accessing object
    console.log(recipe["ingredients"]);
    console.log(recipe.ingredients[3]);
    var recipeRating = recipe["rating"];
    console.log(recipeRating);


    // add property to object
    recipe.servings = 2;

    // change property
    recipe.rating = 4;

    // delete property
    delete recipe.cookTime;

    console.log(recipe);
}

// objects inside array
function filmCritic() {
    var movieList = [
        {title: "Whiplash", rating: 5},
        {title: "Get Out", rating: 4}
    ]

    for(var i=0; i<movieList.length; i++) {
        console.log("I give " + movieList[i].title + " " + movieList[i].rating + " stars.");

        // console.log("I give", movieList[i].title, movieList[i].rating, "stars.");

        // alert("I give " + movieList[i].title + " " + movieList[i].rating + " stars.");
    }
}



// nineTimesTable();
// twelveTimesTables();
// forTimesTable_9();
// forTimesTable_12();
// evenOrOdd_20();
// stupid6TimesTable();
// favoriteFoodsList();
// favRecipe();
// filmCritic();



// object method

    // define object
var eggRecipe1 = {
    title: "Scrambled Eggs",
    description: "Delicious scrambled eggs",
    ingredients: ["4 eggs", "1/4 cup milk", "2 tsp. butter", "salt", "pepper"],
    directions: [
        "1. Beat eggs, milk, salt and pepper in bowl until blended.",
        "2. Heat butter in pan over medium heat until hot.",
        "3. Pour in egg mixture.",
        "4. As eggs begin to set, gently pull across the pan with a spatula to form large soft curds.",
        "5. Continue cooking while pulling, lifting and folding eggs until thickened and no visible liquid egg remains.",
        "6. Remove from heat and serve immediately." ],
    rating: 3.5,
    cookTime: {minutes: 04},
}

    // adding property to object
eggRecipe1.servings = 2;

    // passing object in function
function recipeHeading(recipe) {
    console.log(recipe.title + " - serving size: " + recipe.servings);
}

recipeHeading(eggRecipe1);

    // in your recipe object, add a function called letsCook that says "I'm hungry! Let's cook..." with the name of your recipe title
eggRecipe1.letsCook = function() {
    console.log("I'm hungry! Let's cook..." + eggRecipe1.title);
}

eggRecipe1.letsCook();


