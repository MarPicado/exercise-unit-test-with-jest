console.log("Hello World")

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound   
}

//fromEuroToDollar---------------------------

const fromEuroToDollar = function(valueEuro){
let valueDollar = valueEuro*oneEuroIs.USD;
return valueDollar;
}

//fromDollarToYen---------------------------

const fromDollarToEuro = function(valueDollar){
let valueEuro = Math.floor(valueDollar/oneEuroIs.USD);
return valueEuro;
}

const fromDollarToYen = function(valueDollar){
    let valueYen = fromDollarToEuro(valueDollar) * oneEuroIs.JPY;
    return valueYen
}

//fromYenToPound ------------------------------

const fromYenToEuro = function (valueYen){
    let valueEuro = Math.floor(valueYen / oneEuroIs.JPY);
    return valueEuro;
}
const fromYenToPound = function(valueYen){
    let valuePound = fromYenToEuro(valueYen) * oneEuroIs.GBP;
    return valuePound;
}
module.exports = {sum,fromDollarToYen, fromEuroToDollar,fromYenToPound}


