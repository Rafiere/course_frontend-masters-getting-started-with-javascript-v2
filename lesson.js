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

    if(bookName.includes("Great")){
        return;
    }

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

//types

console.log("\nTypes: \n")

//NaN

var greeting = "Hello, class!"
var something = greeting / 2;
console.log(something) //O tipo é "NaN".

//Devemos usar a palavra-chave "new" para criar instâncias de objetos "built-in".

var object = new Object();
var array = new Array();

//Para mudança de tipos , não devemos utilizar o "new".

Number()
String()

//Coerção de tipos:
var msg = "There are "
var numericStringStudents = "16";
var numericStudents = Number(numericStringStudents)

//Falsy and Truthy:
console.log("\nFalsy and Truthy: ")

//Quando convertermos um valor para booleano e ele retorna "false", temos um "falsy".
console.log(!!0)
console.log(!!NaN)
console.log(!!false)
console.log(!!undefined)

//Quando convertermos um valor para booleano e ele retorna "false", temos um "falsy".

console.log(!!"foo")
console.log(!!100)
console.log(!![1, 3])

//Igualdade:
console.log("\nIgualdade: ")

//O operador "==" permite a coerção de tipos.
console.log("1" == 1) //true

//O operador "===" não permite a coerção de tipos. Os tipos devem ser iguais.
console.log("1" === 1) //false

//Quando os tipos são iguais, os operadores "==" e "===' fazem a mesma coisa.

console.log("\nEscopo: ")

/* O Escopo é onde a engine do JS procura pelas variáveis. */
x = 42
console.log(x);

/* No exemplo acima, quando inserimos o comando "console.log(y)", a engine do JS precisa procurar onde a variável
* "x" foi declarada. */

/* Se o JS não encontrar a declaração no escopo atual, ele procurará no escopo anterior ao atual, por exemplo: */

var teacher = "Kyle"

function otherClass(){
    teacher = "Suzy"
    topic = "React"

    console.log("Welcome!")
}

otherClass() //Welcome!

console.log(teacher) //Suzy
console.log(topic) //Como essa variável não foi declarada, apenas atribuída, o JS criou uma declaração dessa variável no escopo global.

/* Undefined x Undeclared */
console.log("\nUndefined vs Undeclared")

/* Uma variável "undefined" é uma variável que foi declarada, mas não possui nenhum valor, e uma
* variável "undeclared" é uma variável que nunca foi declarada e a Engine do JS não sabe onde ela está. */

/* Function Expressions */
console.log("\nFunction Expressions")

/* Uma "function expression" é uma função que foi atribuída em um valor em algum lugar. */

/* No JS, funções também são valores, assim, elas podem ser retornadas, atribuídas em alguma variável e etc. */

/* No JS, as funções são "First Class Citizens", assim, elas podem ser passadas como valor. */

/* Abaixo, temos uma expressão de função anônima, ou seja, uma função anônima está sendo atribuída para uma
* variável. */
var clickHandler = function(){
    // Código da função...
}

/* Abaixo, temos uma expressão de função anônima. É recomendado, se possível, sempre optarmos pela alternativa
* abaixo, pois isso possui algumas vantagens, como facilitar no debugging, por exemplo, pois a stacktrace fica mais
* descritiva.  */
var keyHandler = function keyHandler(){
    // Código da função...
}

/* O código abaixo, muitas vezes, não é recomendado. */
people = []
var ids = people.map(person => person.id)

/* O código abaixo é mais recomendado. */
var ids = people.map(function getId(person){
    return person.id
})

/* Na minha opinião, eu acho que depende muito do caso. Se for uma lógica mais complexa, nomear a função torna ela mais
* descritiva. Se for uma lógica simples, nomear a função não faz muito sentido. */

/* IIFE */

console.log("\nIIFE: ")

/* As IIFE, ou "Immediately Invoked Function Expression" são funções que são executadas imediatamente após descrevermos esse
* tipo de função como um valor. Com isso, estamos protegendo o escopo da atribuição, assim, o valor de "teacher2" será alterado
* apenas dentro dessa função. */

var teacher2 = "Kyle";
(function anotherTeacher(){
    var teacher2 = "Suzy"
    console.log(teacher2) //Suzy
})();

console.log(teacher2) //Kyle

/* Let */

console.log("\nLet")

/* Ao invés de usar a IIFE acima, poderíamos apenas declarar a variável com a palavra-chave "let", assim, o escopo global não
* seria afetado pela redeclaração, por exemplo: */
var teacher3 = "Kyle"

{
    let teacher3 = "Suzy"
    console.log(teacher3); //Suzy
}

console.log(teacher3) //Kyle

/* Dessa forma, a palavra-chave "let" é usada para declararmos variáveis apenas dentro de um determinado escopo. */

/* Closures */
console.log("\nClosures")

/* Closure é quando uma função "lembra" das variáveis que estão fora dela, mesmo que passemos essa função para quaisquer lugares. */

function ask(question){
    return function holdYourQuestion(){
        console.log(question)
    }
}

/* Estamos passando o valor "What is closure?" para a variável "question" da função "ask" e estamos atribuindo essa
* função para a variável "myQuestion". */
var myQuestion = ask("What is closure?");

/* Quando chamarmos a variável "myQuestion" como uma função, ela se lembrará que o valor de "question" é "What is closure". */
myQuestion(); //What is closure?
