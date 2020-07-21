const billTypeTextElem = document.querySelector(".billTypeText");
const addToBillBtnElem = document.querySelector(".addToBillBtn");
const callTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalElem = document.querySelector(".totalOne");
const textBill = calculateTextBill();

function buttonClicked() {

  var billTypeEntered = billTypeTextElem.value.trim();
  textBill.textBillTotal(billTypeEntered)
  
  // do totals
  callTotalElem.innerHTML = textBill.getCallTotal().toFixed;
  smsTotalElem.innerHTML = textBill.getSmsTotal().toFixed;
  totalElem.innerHTML = textBill.getTotal().toFixed;
  
  //do colors
  totalElem.classList.add(textBill.styleColor());

}


addToBillBtnElem.addEventListener("click", buttonClicked);