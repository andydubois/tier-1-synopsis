//runs the ready now function when the document is ready
$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase(){
    console.log('in addPurchase');
    //get user input and create new object
    let newPurchase = {
        name: $('#purchaseNameIn').val(),
        price: $('#purchasePriceIn').val(),

    }
    //push new purchase into the array
    purchases.push(newPurchase);
    //empty inputs
    $('#purchaseNameIn').val('');
    $('#purchasePriceIn').val(''); //.val will always return a STRING
    //calculate remainingBudget
    calculateRemainingBudget();
    //update DOM
    displayPurchases();
} //end addPurchase

function calculateRemainingBudget(){
    console.log('inCalculateRem....');
    // loop through purchases array
    let totalPrices = 0;
    for ( let i = 0; i < purchases.length; i++){
    //for each purchase, add up the total of all prices
    totalPrices += Number(purchases [ i ].price);
    } //end for loop
    console.log( 'totalPrices:', totalPrices);
    //subtract totalPrices from the budget for remainingBudget
    const remainingBudget = budget - totalPrices;
    //display remainingBudget
    let el = $('#remainingBudgetOut');
    el.empty();
    el.append( remainingBudget );
} //end calculateRemainingBudget

function displayPurchases(){
    console.log(displayPurchases)
    //target output by ID
    let el = $('#purchasesOut');
    //empty
    el.empty();
    //loop through purchases array
    for (purchase of purchases) {
    //for each purchase, create a list item
    el.append( '<li>' + purchase.name + ': $' + purchase.price + '</li>' );
    } //end for loop
} //end displayPurchases

function readyNow() {
    //display budget
    //target budgetOut by id
let el = $('#budgetOut');
el.empty();
el.append( budget );
//handle click event
$('#addPurchaseButton').on('click', addPurchase);
//init display remainingBudget
calculateRemainingBudget();
} //end readyNow