const btnAdd=document.querySelector(".add");
const btnUpd=document.querySelector(".updateSettings")
const color=document.querySelector(".bread");
const smsCost=document.querySelector(".smsCostSetting");
const callCost=document.querySelector(".callCostSetting");
const dangerLevel=document.querySelector(".dangerLevelSetting");
const warningLevel=document.querySelector(".warningLevelSetting");
const totalCostElem=document.querySelector(".totalSettings");
const callCostElem=document.querySelector(".callTotalSettings");
const smsCostElem=document.querySelector(".smsTotalSettings");


const billWithSettings = BillWithSettings();

function btnUpdClicked(){

billWithSettings.setCallCost(Number(callCost.value))
billWithSettings.setSmsCost(Number(smsCost.value))
billWithSettings.setWarningLevel(Number(warningLevel.value))
billWithSettings.setDangerLevel(Number(dangerLevel.value))
colourCode();
}


function btnAddClicked(){

  var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");
 if (radioSmsCall) {
  var item = radioSmsCall.value;  
 if (item === "call") {
  
  billWithSettings.makeCall()
}
 if (item = "sms") {

  billWithSettings.sendSms()
 } 
}

callCostElem.innerHTML = billWithSettings.getTotalCallCost().toFixed(2);
smsCostElem.innerHTML = billWithSettings.getTotalSmsCost().toFixed(2);
totalCostElem.innerHTML = billWithSettings.getTotalCost().toFixed(2);
colourCode();
}

function colourCode(){

  totalCostElem.classList.remove("danger");
  totalCostElem.classList.remove("warning");
  
  // var currentStyle = billWithSettings.colourCode();
  totalCostElem.classList.add(billWithSettings.totalClassName());
}


btnAdd.addEventListener("click", btnAddClicked);
btnUpd.addEventListener("click", btnUpdClicked);