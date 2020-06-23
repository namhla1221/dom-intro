// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
//var billItem = billItemType.trim ();
var billItemTypeRadio = document.querySelector(".billItemTypeRaidio");

var billRadioBtn = document.querySelector(".radioBillAddBtn");

var callTotal2 = document.querySelector(".callTotalTwo");

var smsTotal2 = document.querySelector(".smsTotalTwo");

var total2 = document.querySelector(".totalTwo");

var totalCalls = 0;
var totalSms = 0;
var grandTotal = 0;


function radioBill() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");
  
  
    var billItemType = checkedRadioBtn.value
    console.log(billItemType)
    if (billItemType === 'call') {
        totalCalls += 2.75;
        grandTotal += 2.75;
     
    }
     else if ( billItemType === 'sms'){
         totalSms += 0.75;
         grandTotal += 0.75;
    }

    callTotal2.innerHTML = totalCalls.toFixed(2);
    smsTotal2.innerHTML = totalSms.toFixed(2);
    total2.innerHTML = grandTotal.toFixed(2);
    styleTotalColor();
}

function styleTotalColor() {
 
    total2.classList.remove("danger")
    total2.classList.remove("warning")

    if (grandTotal >= 50) {
        total2.classList.add("danger")
    } else if (grandTotal >= 30 && grandTotal <= 50) {
        total2.classList.add("warning")
    }
}


billRadioBtn.addEventListener('click', radioBill);