function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(10, 500));

