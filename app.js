// function updateProduct(product, isAdd, price) {
//     const productInput = document.getElementById(product + '-number');
//     if (isAdd == true) {
//         const updateProductNum = parseInt(productInput.value) + 1;
//         productInput.value = updateProductNum;
//     } else {
//         if (productInput.value > 0) {
//             const updateProductNum = parseInt(productInput.value) - 1;
//             productInput.value = updateProductNum;
//         }
//     }
//     const totalProduct = parseInt(productInput.value);
//     const priceField = document.getElementById(product + '-total')
//     priceField.innerText = totalProduct * price;
//     totalPrice();
// };
// //Get total products input value
// function inputTotalValue(product, price) {
//     const productInput = document.getElementById(product + '-number');
//     const productInputNum = parseInt(productInput.value);
//     const totalinputPrice = productInputNum * price;
//     return totalinputPrice;
// }
// //Calculate and update total price
// function totalPrice() {
//     const phoneTotal = inputTotalValue('phone', 1219);
//     const caseTotal = inputTotalValue('case', 59);
//     const subTotal = phoneTotal + caseTotal;
//     const tax = subTotal * (2 / 100); //2% tax
//     const totalPrice = subTotal + tax;
//     const subTotalField = document.getElementById('sub-total');
//     const taxTotalField = document.getElementById('tax-amount');
//     const totalPriceField = document.getElementById('total-price');
//     subTotalField.innerText = subTotal;
//     taxTotalField.innerText = Math.round(tax);
//     totalPriceField.innerText = totalPrice;
// }

// //For phone
// document.getElementById('phone-plus').addEventListener('click', () => {
//     updateProduct('phone', true, 1219);
// });
// document.getElementById('phone-minus').addEventListener('click', () => {
//     updateProduct('phone', false, 1219);
// });

// //For case
// document.getElementById('case-plus').addEventListener('click', () => {
//     updateProduct('case', true, 59);
// });
// document.getElementById('case-minus').addEventListener('click', () => {
//     updateProduct('case', false, 59);
// });





function getInput(product, isAdd, price) {
        const getInput = document.getElementById(product + '-number');
    const getInputValue = parseInt(getInput.value);
    if (isAdd) {
        getInput.value = getInputValue + 1;
    } else if(getInput.value > 0){
        getInput.value = getInputValue - 1;
    }
    calculate(product, price);
    updateTotal(product, price)
};

function calculate(product, price) {
    const inputField = document.getElementById(product + '-number');
    const inputNum = parseInt(inputField.value);
    const total = price * inputNum;
    return total;
}

function updateTotal(product, price) {
    const phonePrice = calculate('phone', 1219);
    const casePrice = calculate('case', 59);

    const priceField = document.getElementById(product + '-total');
    priceField.innerText = calculate(product, price);

    const subtotal = document.getElementById('sub-total');
    const subTotalAmount = phonePrice + casePrice;
    subtotal.innerText = subTotalAmount;

    const taxField = document.getElementById('tax-amount');
    const tax = parseFloat(subtotal.innerText) * (2 / 100);
    const taxAmount = tax.toFixed(2);
    taxField.innerText = taxAmount;

    const totalField = document.getElementById('total-price');
    totalField.innerText = Number(subTotalAmount) + Number(taxAmount);
}

//For phone
document.getElementById('phone-plus').addEventListener('click', () => { 
    getInput('phone', true, 1219)
    
})
document.getElementById('phone-minus').addEventListener('click', () => { 
    getInput('phone', false, 1219);
})

//For Case
document.getElementById('case-plus').addEventListener('click', () => { 
    getInput('case', true, 59);
})
document.getElementById('case-minus').addEventListener('click', () => { 
    getInput('case', false, 59);
})