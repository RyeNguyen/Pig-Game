/******************************
 Variables


console.log("Hello World!!!");

var firstName = "Quang Minh";
var lastName = "Nguyen";
var age = 20;
console.log(lastName + " " + firstName + ", you are " + age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

//this is a single comment
job = "Developer";
console.log(job);


var lastName2 = prompt("What is his last name?");
console.log("John " + lastName2);


/**********************************
Basic operators
*

var num1 = 10, num2 = 20;
alert("The sum is " + num1 + num2);

console.log(76238476238463545236472354 * 62354723547235745235);
console.log(10/0);

var ageJohn, ageMark;
ageJohn = 28;
ageMark = 30;
var older = ageJohn > ageMark;
console.log(older);

console.log(typeof older);


/*************************************
 Coding Challenge 1
*

var massJohn = 61, massMark = 58;
var heightJohn = 1.6, heightMark = 1.58;
var BMIJohn = Math.round(massJohn / (Math.pow(heightJohn, 2)));
var BMIMark = Math.round(massMark / (Math.pow(heightMark, 2)));
console.log("John's BMI is " + BMIJohn + ", Mark's BMI is " + BMIMark);
var compareBMI = BMIJohn > BMIMark;
if (compareBMI) {
    console.log("John's BMI is higher than Mark's");
} else {
    console.log("Mark's BMI is higher than John's");
} */


/******************************
 The ternary operator and switch statements


var firstName = "Caleb";
var age = 16;

age >= 18 ? console.log(firstName + " can drink wine") : console.log(firstName + " Caleb can drink juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

var job;
switch (job) {
    case "engineer":
        console.log(firstName + " is a " + job);
        break;
    case "developer":
        console.log(firstName + " is a " + job);
        break;
    case "teacher":
        console.log(firstName + " is a " + job);
        break;
    default:
        console.log(firstName + " is unemployed");
}

switch (true) {
    case age < 13:
        console.log(firstName + " is a boy");
        break;
    case age >= 13 && age < 18:
        console.log(firstName + " is a teenager");
        break;
    default:
        console.log(firstName + " is a man");
        break;
} */


/***************************************
 Coding Challenge 2

var scoreJohn1 = 89;
var scoreJohn2 = 120;
var scoreJohn3 = 103;

var scoreMike1 = 116;
var scoreMike2 = 94;
var scoreMike3 = 123;

var avgJohn = (scoreJohn1 + scoreJohn2 + scoreJohn3) / 3;
console.log(avgJohn);
var avgMike = (scoreMike1 + scoreMike2 + scoreMike3) / 3;
console.log(avgMike);

switch (true) {
    case avgJohn > avgMike:
        console.log("John wins");
        break;
    case avgJohn === avgMike:
        console.log("Draw");
        break;
    default:
        console.log("Mike wins");
        break;
}

var scoreMary1 = 97;
var scoreMary2 = 134;
var scoreMary3 = 105;

var avgMary = (scoreMary1 + scoreMary2 + scoreMary3) / 3;
console.log(avgMary);

if (avgJohn > avgMike) {
    if (avgJohn > avgMary) console.log("John wins");
    else if (avgJohn < avgMary) console.log("Mary wins");
    else console.log("John and Mary are draw");
} else if (avgJohn < avgMike) {
    if (avgMike > avgMary) console.log("Mike wins");
    else if (avgMike < avgMary) console.log("Mary wins");
    else console.log("Mike and Mary are draw");
} else {
    if (avgJohn > avgMary) console.log("John and Mike are draw");
    else if (avgJohn < avgMary) console.log("Mary wins");
    else console.log("DRAW");
} */

/*********************************
 * function

function sayHi(name) {
    return "Hello " + name;
}

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

console.log(sayHi("Minh"));
console.log(calculateAge(1739));

//function declaration
//function whatDoYouDo() {}

//function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case "teacher":
            return firstName + " is a " + job;
        case "developer":
            return firstName + " is a " + job;
        default:
            return firstName + " is unemployed";
    }
}

console.log(whatDoYouDo('', "Hitler"));
*/


/*******************************
 Arrays


var friends = ["Alex", "Tren", "Booby", "Viagra"];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

//mutate array data
friends[1] = "Cell";
friends[friends.length] = "Clown";
console.log(friends);
friends.push("Bat");
friends.unshift("Shutterstock");
friends.pop();
friends.shift();
console.log(friends); */


/*********************************************
 * Coding challenge 3


var billRes1 = 124;
var billRes2 = 48;
var billRes3 = 268;
var finalPaid = [];
var tips = [];

finalPaid.push(billRes1);
finalPaid.push(billRes2);
finalPaid.push(billRes3);

for (var i = 0; i < finalPaid.length; i++) {
    if (finalPaid[i] < 50) tips.push(finalPaid[i] * 0.2);
    else if (finalPaid[i] >= 50 && finalPaid[i] <= 200)
        tips.push(finalPaid[i] * 0.15);
    else tips.push(finalPaid[i] * 0.1);
}

console.log("All three tips: " + tips);

for (var i = 0; i < tips.length; i++) {
    finalPaid[i] += tips[i];
}

console.log("All three final paid amounts: " + finalPaid); */


/***********************************
 Objects and properties

var john = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    job: "firefighter",
    family: ["Kate", "Harry", "Mark", "Steve"],
    isMarried: true,
    sayHi: function() {
        return "Hello " + this.firstName + " " + this.lastName + ", you are " + this.age;
    }
};

console.log(john.family);
console.log(john['job']);
john.age = '26';
var x = 'age';
console.log(john[x]);

console.log(john.sayHi());
john.porfolio = john.sayHi();
console.log(john);

var jane = {};
jane.name = "Jane";
jane.age = 18;
jane["job"] = "student";
console.log(jane); */


/***********************************************
 Coding Challenge 4


var john = {
    name: "John Kane",
    mass: 70,
    height: 1.7,
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};
console.log(70 / (1.7 * 1.7));

var mike = {
    name: "Mike Abel",
    mass: 62,
    height: 1.75,
    calculateBMI: function () {
         return this.mass / (Math.pow(this.height, 2));
    }
};

john.BMI = john.calculateBMI();
mike.BMI = mike.calculateBMI();

switch (true) {
    case john.BMI > mike.BMI:
        console.log("John's BMI is higher than Mike's with BMI = " + john.BMI);
        break;
    case john.BMI < mike.BMI:
        console.log("Mike's BMI is higher than John's with BMI = " + mike.BMI);
        break;
    default:
        console.log("They have the same BMI");
} */


/************************************
 Coding Challenge 5
 */

var john = {
    bills: [124, 48, 268, 180, 42],
    calculateTip: function(tips) {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                tips.push(this.bills[i] * 0.2);
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                tips.push(this.bills[i] * 0.15);
            } else {
                tips.push(this.bills[i] * 0.1);
            }
        }
    }
};

var tipsJohn = [];
var finalPaid = [];
john.calculateTip(tipsJohn);

console.log(tipsJohn);

for (var i = 0; i < tipsJohn.length; i++) {
    finalPaid[i] = john.bills[i] + tipsJohn[i];
}

console.log(finalPaid);

var mark = {
    bills: [77, 375, 110, 45],
    calculateTip: function(tips) {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                tips.push(this.bills[i] * 0.2);
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                tips.push(this.bills[i] * 0.1);
            } else {
                tips.push(this.bills[i] * 0.25);
            }
        }
    }
};

var tipsMark = [];
mark.calculateTip(tipsMark);
console.log(tipsMark);
var sumTipsMark = 0;
for (var j = 0; j < tipsMark.length; j++) {
    sumTipsMark += tipsMark[j];
}
var avgMark = sumTipsMark / tipsMark.length;
console.log(sumTipsMark);
var sumTipsJohn = 0;
for (var k = 0; k < tipsJohn.length; k++) {
    sumTipsJohn += tipsJohn[k];
}
var avgJohn = sumTipsJohn / tipsJohn.length;
console.log(avgMark + ", " + avgJohn);
avgJohn > avgMark ? console.log("John's family paid the highest tips") :
    console.log ("Mark's family paid the highest tips");