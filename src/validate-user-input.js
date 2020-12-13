function validateUserInput(amount, initialCurrency, targetCurrency) {
    if (amount === undefined || initialCurrency === undefined || targetCurrency === undefined) {
        if ( amount === undefined) {
            console.log('The amount to be converted is missing!');
            process.exit();
        } else if (initialCurrency === undefined) {
            console.log('The initial currency is missing!');
            process.exit();
        } else {
            console.log('The targeted currency is missing!');
            process.exit();
        }
    }
}

module.exports = { validateUserInput };