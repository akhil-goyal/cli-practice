validateCurrency = (rates, initialCurrency, targetCurrency) => {
    if (rates[initialCurrency] === undefined) {
        console.log('Initial currency is invalid!', initialCurrency);
        process.exit();
    }

    if (rates[initialCurrency] !== undefined && rates[initialCurrency][targetCurrency] === undefined) {
        console.log('Target currency is invalid!', targetCurrency);
        process.exit();
    }
}

module.exports = {
    validateCurrency
}