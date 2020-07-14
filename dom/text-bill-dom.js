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
  callTotalElem.innerHTML = textBill.getCallTotal();
  smsTotalElem.innerHTML = textBill.getSmsTotal();
  totalElem.innerHTML = textBill.getTotal();
  
  //do colors
  totalElem.classList.add(textBill.styleColor());

}


addToBillBtnElem.addEventListener("click", buttonClicked);