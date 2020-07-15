var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

var billRadioBtn = document.querySelector(".radioBillAddBtn");

var callTotal2 = document.querySelector(".callTotalTwo");

var smsTotal2 = document.querySelector(".smsTotalTwo");

var total2 = document.querySelector(".totalTwo");

var radioInstance = RadioBill();


function radioBill() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  
  
    var billItemType = checkedRadioBtn.value;
    
    radioInstance.radioBtns(billItemType);

    callTotal2.innerHTML = radioInstance.getCallCost().toFixed(2)

    smsTotal2.innerHTML = radioInstance.getSmsCost().toFixed(2)

    total2.innerHTML = radioInstance.getTotalCost().toFixed(2)
    styleTotalColor();
}

function styleTotalColor() {
 
    total2.classList.remove("danger")
    total2.classList.remove("warning")

    var currentStyle = radioInstance.styleTotalColor();
     
    total2.classList.add(currentStyle);
    // if (grandTotal >= 50) {
    //     total2.classList.add("danger")
    // } else if (grandTotal >= 30 && grandTotal <= 50) {
    //     total2.classList.add("warning")
    // }
}



billRadioBtn.addEventListener('click', radioBill);