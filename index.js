let myName = "Abracadabra";
console.log(myName.length);

let thisBoy = "Come to me and " + "and let us merry ";
console.log(thisBoy)

let plusEqual = "This came to me ";
plusEqual += "very sudden hmmm";
console.log(plusEqual);

let myNames = "Adebakin Fuad ";
let otherSent = "My Full name is " + myNames +" dont play with me ";
console.log(otherSent); 

let aNoun = "Tobi ";
let aVerb = "Fought well!";
aNoun += aVerb
console.log(aNoun);

let firstLetterOfLastName = "";
let myLastName = "Abdul-rahman";
firstLetterOfLastName = myLastName[0];
console.log(firstLetterOfLastName);

let lastLetterOfFirstName = "";
let firstName = "Adebakin";
lastLetterOfFirstName = firstName[7];
console.log(lastLetterOfFirstName);

let myNickName = "Sandu"
let  fourthLetterOfmyNickName = myNickName[myNickName.length -2];
console.log(fourthLetterOfmyNickName);

function blanksWords(myAdjective, myNoun, myVerb, myAdverb){
    let result = "";
    result +=
    "I " + myAdjective + " " + myNoun + " " + myVerb + " become rich " + myAdverb;
    return result;
}
console.log(blanksWords("would", "love", "to", "easily" ));

let fuadArray = ["Fuad", 24];
console.log(fuadArray);

let anArray = [ ["Valentine", 14], ["February", 14]];
console.log(anArray[1]);

let adeArray = [20, 40, 60, 80, "Fuad", 100, "Yekini" ]
adeArray = [3];
console.log(adeArray);

let qArray = [20, 40, 60, 80, "Fuad", 100, "Yekini" ];
qArray[4] = "Adebakin";
console.log(qArray);

let pArray = ["Bakare", "Jeunbe", "Arda Thuran", "Cisse"];
pArray.push(["Rishy", "Haaland"]);
console.log(pArray);

let poArray = ["Bakare", "Jeunbe", "Arda Thuran", "Cisse"];
poArray.pop()
console.log(poArray);

let shArray =  ["Bakare", "Jeunbe", "Arda Thuran", "Cisse"];
shArray.shift();
console.log(shArray);

let unArray =  ["Bakare", "Jeunbe", "Arda Thuran", "Cisse"];
unArray.unshift("Dagboru", "utensil")
console.log(unArray)

let myShoppingList = [
    ["Garri", 100], ["Indomie", 3], ["Egg Roll", 30], ["Corn Flakes", 40] 
];
console.log(myShoppingList);

function reUsableCode(){
    console.log("Hi World")
}
reUsableCode();

function myFunctionWithArguement(c, d){
    console.log(c * d);
}
myFunctionWithArguement(10, 5);

function minEight(digit){
    return digit * 20;
}
console.log(minEight(10));

let add = 0;
function mutFive(){
    add = add + 5
}
console.log(add);

let changed = 0;
function change(num){
    return (num + 5)/ 3;
}
changed = change(10);
console.log(changed);

let liver = 0;
function liverpool(num){
    return (num - 8)/7
}
liver = liverpool(1);
console.log(liver);

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function betterDaysAhead(aheadOf) {
    if(aheadOf){
        return "Better Days Approaching"
    }return "Better Days Faded"
}
console.log(betterDaysAhead(false));

function barCelona(val){
    if(val == 50){
        return "Fifty"
    }return "Dey Play"
}
console.log(barCelona())

function realMadrid(num){
    if(num === 20){
        return "twenty"
    }return "Gettat"
}
console.log(realMadrid("20"))

function comPare(a, b){
    if(a === b){
        return "true"
    }return "Big Wiz"
}
console.log(comPare(10, "10"))

function nutEqual(num){
    if(num != "Messi"){
        return "Not a GOAT!"
    }return "GOOOAT!"
}
console.log(nutEqual("Messi"))

function noGreeEqual(digit){
    if(digit !== 35){
        return "Dont Play!"
    }return "Dey Play"
}
console.log(noGreeEqual(35));

function highOnHigh(num){
    if(num > 50){
        return "Fifty Cent"
    }if(num > 20){
        return "Tylaa"
    }return "Portable"  
}
console.log(highOnHigh(10));

function highEqualToHigh(val){
    if(val >= 30){
        return "Machala"
    }if(val >= 20){
        return "Baba nla"
    }return "Big Daddy"
}
console.log(highEqualToHigh(10))

function andTesting(val){
    if(val <= 40 && val >= 30){
        return "Alfa Jeje"
    }return "Sherifdeen"
}
console.log(andTesting(10))