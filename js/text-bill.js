// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const type = document.querySelector (".billTypeText");
const button = document.querySelector (".addToBillBtn");
const callT = document.querySelector (".callTotalOne");
const smsT = document.querySelector (".smsTotalOne");
const total = document.querySelector (".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var billTotal = 0;

function totalPhoneBill (billString){
var billItems = billString.split (",");
for (var i=0;i<billItems.length;i++){
var billItem = billItems[i].trim ();
if (billItem === "call"){
billTotal += 2.75;
callsTotal += 2.75;
}
else if (billItem === "sms"){
billTotal += 0.75;
smsTotal += 0.75;
}
}
var roundedBillTotal = billTotal.toFixed (2);
callT.innerHTML = (callsTotal).toFixed (2);
smsT.innerHTML = (smsTotal).toFixed (2);
return roundedBillTotal;
}

function styleTotalColor (roundedBillTotal){
const currentTotal = Number (roundedBillTotal);

total.classList.remove("danger")
total.classList.remove ("warning")

if (currentTotal >= 50 ){
total.classList.add ("danger")
}
else if (currentTotal >= 30 && currentTotal <= 50 ) {
total.classList.add ("warning")
}
}

function calculateBtnClicked (){
var billString = type.value;
const roundedBillTotal = totalPhoneBill (billString);
total.innerHTML = roundedBillTotal
styleTotalColor (roundedBillTotal);
}
button.addEventListener ("click", calculateBtnClicked);