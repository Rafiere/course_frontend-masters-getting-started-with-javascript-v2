//types

console.log("Types: \n")

console.log(typeof 42) //number
console.log(typeof "Kyle") //string
console.log(typeof true) //boolean
console.log(typeof undefined) //undefined
console.log(typeof {age: 100}) //object

console.log(typeof null) //object
console.log(typeof [1, 2, 3]) //object

//variables

console.log("\nVariables: \n")

var name = "Kyle Simpson"
var age;
age = 100;
var friends = ["Carla", "Marcela"];

console.log(friends.length)
console.log(friends[1])

//decisions

console.log("\nDecisions: \n")

var age2 = 100;

if(age > 18){
    console.log("Você tem mais de 18 anos.")
} else if(age < 18){
    console.log("Você tem menos de 18 anos.")
} else {
    console.log("Você possui 18 anos.")
}

//loops

console.log("\nLoops: \n")

var numbers = [0, 1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++){
    console.log("Index: " + i + " - Value: " + numbers[i])
}

console.log("")

for (let number of numbers){
    console.log("Value: " + number)
}

//functions

console.log("\nProcedures and Functions: \n")

student = {
    name: "Teste",
    age: 99
}

/* Uma procedure não retorna nenhum valor. */
function greetStudent(student){
    console.log(`Hello, ${student.name}. Your age is ${student.age} years old.`)
}

greetStudent(student)

console.log("")

/* Uma função retorna um determinado valor. */

function timeRemaining(timeElapsed, endTime){
    return endTime - timeElapsed;
}

var timeLeft = timeRemaining(100, 1000)

console.log("Time left: " + timeLeft + " seconds.")

//programming primer exercise

console.log("\nFirst Exercise: \n")

var favoriteBooks = []

function addFavoriteBook(bookName){
    favoriteBooks.push(bookName)
}

addFavoriteBook("A Song of Ice and Fire")
addFavoriteBook("The Great Gatsby")
addFavoriteBook("Crime & Punishment")
addFavoriteBook("Great Expectations")
addFavoriteBook("You Don't Know JS")

for (const book of favoriteBooks) {
    console.log("Book: ", book)
}

