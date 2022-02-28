
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

//Example function
function findMexicanFood(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results = dishes.filter(function(element){
        if(element.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

let vegetarianFood = problemOne();
console.log('Dishes with cuisine type of "Vegetarian": ', vegetarianFood);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemTwo(){
    let results = dishes.filter(function(element){
        if(element.cuisine === "Italian" && element.servings > 5){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

let italianForMoreThanFive = problemTwo();
console.log('Dishes where cuisine is "Italian" and serving count is more than "Five": ', italianForMoreThanFive);

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

function problemThree(){
    let results = dishes.filter(function(element){
        if(element.id === element.servings){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

let dishesIdEqualServingCount = problemThree();
console.log('Returns a list of dishes where its ID match its Serving Count: ', dishesIdEqualServingCount);


//4. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFour(){
    let results = dishes.filter(function(element){
        if(element.servings % 2 == 0){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

let servingCountIsEven = problemFour();
console.log('Returns dishes where its Serving Count is an Even Number: ', servingCountIsEven);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function problemFive(){
    let results = dishes.filter(function(element){
        if(element.ingredients[0] === "tomato" && element.ingredients[1] === "cheese"){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

let ingredentTomatoCheese = problemFive();
console.log('Returns the list of dishes with tomato and cheese as ingredients: ', ingredentTomatoCheese);

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

function problemSixA(){
    let namesOfCusines = dishes.map(function(element){
        return element.cuisine;
    })
    return namesOfCusines;
}

let listOfCusines = problemSixA();
console.log('This is an array that displays the names of the cuisine types (i.e. Italian, Mexican, etc.): ', listOfCusines);

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 

function problemSeven(){
    let cuisineAndDishName = dishes.map(function(element){
        return element.cuisine + " " + element.name;
    })
    return cuisineAndDishName;
}

let disheNameIncludesCuisine = problemSeven();
console.log('This displays an array with Cuisine Type appended to Dish Name (i.e. Italian Pizza): ', disheNameIncludesCuisine);

//8. Create a function that will append the cuisine type to the start of the dish's name. 
//Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function problemEight(){
    let vegeWithCuisineAndName = dishes.map(function(element){
        element.name = element.cuisine + " " + element.name;
        return element;
    }).filter(function(element) {
        return element.cuisine === "Vegetarian";
    })
    return vegeWithCuisineAndName;
}

let vegeDishesCuisineAndName = problemEight();
console.log('This array displays the dish objects (11-13) with cuisine appended with dish name and only those that are vegetarian cuisines: ', vegeDishesCuisineAndName);


//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemNine(){
    let results = dishes.filter(function(element){
        if(element.ingredients.includes("chickpea")){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

let dishesWithChickpea = problemNine();
console.log('Returns a list of dishes where its ingredients includes "chickpea": ', dishesWithChickpea);

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function problemTen(){
    let results = dishes.reduce(function(sum, element) {
        return sum + element.servings;
        }, 0);
    return results;
}


console.log('The sum of all servings is: ', results);

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

