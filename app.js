
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = (a) => {
    let valueInDollar = a / oneEuroIs["USD"];
    return valueInDollar * oneEuroIs["JPY"];
}

const fromYenToPound = (a) => {
    let valueInYen = a / oneEuroIs["JPY"];
    return valueInYen * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound };