const calculateBtn = document.querySelector(".calculateBtn");

const billTotalElement = document.querySelector(".billTotal");

const billStringField = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");

const totalPhoneBill = TotalPhoneBill();


// var roundedBillTotal = billTotal.toFixed(2);
// return roundedBillTotal;



function styleTotalColor(roundedBillTotal) {

    billTotalSpanElement.classList.remove("danger");
    billTotalSpanElement.classList.remove("warning");
    billTotalSpanElement.classList.add(totalPhoneBill.style());

}


function calculateBtnClicked() {

    var billString = billStringField.value;
    totalPhoneBill.calculate(billString);
    const roundedBillTotal = totalPhoneBill.getTotal()

    billTotalElement.innerHTML = roundedBillTotal.toFixed(2);
    styleTotalColor(roundedBillTotal);
}

calculateBtn.addEventListener("click", calculateBtnClicked);