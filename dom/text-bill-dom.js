const billTypeTextElem = document.querySelector(".billTypeText");
const addToBillBtnElem = document.querySelector(".addToBillBtn");
const callTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalElem = documemt.querySelector(".totalOne");



const textBill = calculateTextBill();




function buttonClicked() {


  var billTypeEntered = billTypeTextElem.value.trim();


  textBill.textBillTotal(billTypeEntered)


  talElem.innerHTML = textBill.getCallTotal();


  smsTotalElem.innerHTML = textBill.getSmsTotal();


  
  totalElem.classList.add(textBill.styleColor());



       totalElem.innerHTML = textBill.getTotal();



}


addToBillBtnElem.addEventListener("click", buttonClicked);