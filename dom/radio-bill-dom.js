const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
// put the dot inside the double qoutes 
const totalTwo = document.querySelector(".totalTwo");

const radioBill = radioBillFact();

// have your Total here
function radioBillTotal(radioBillFact){

// var checkedBtn = document.querySelector("input[name='billItemType']:checked");

var billItemInserted = checkedBtn.value;

radioBill.radioBillTotal(billItemInserted)

//    if (billItemInserted === "call"){
//        callTotal += 2.75;
//      // update Total here. eg Total  += 2.75
//       }
//   // it's "else if" not "if else" 
//       else if (billItemInserted === "sms") {
//           smsTotal += 0.75;
//         // same thing here 
// }
  // it's toFixed(2) 
     callTotalTwo.innerHTML= radioBill.toFixed(2);
     smsTotalTwo.innerHTML= radioBill.toFixed(2);
  // make it a global variable 
    // theTotal = callTotal + smsTotal;
    totalTwo.innerHTML= radioBill.toFixed(2);
    // radioBillTotalColor(theTotal);
};


// function radioBillTotalColor(theTotal){
//     // remove the dots - to ("danger")

//     totalTwo.classList.remove("danger");

//     totalTwo.classList.remove("warning");

//     if (theTotal >= 50){
     
//       totalTwo.classList.add("danger");

// }
//    else if (theTotal >= 30){
     
//      totalTwo.classList.add("warning");
// }
totalElem.classList.add(textBill.styleColor());
// };

radioBillAddBtn.addEventListener("click",radioBillTotal)

