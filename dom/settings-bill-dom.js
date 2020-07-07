const btnAdd=document.querySelector(".add");
const btnUpd=document.querySelector(".updateSettings")
const color=document.querySelector(".bread");
const smsCost=document.querySelector(".smsCostSetting");
const callCost=document.querySelector(".callCostSetting");
const criticalLevel=document.querySelector(".criticalLevelSetting");
const warningLevel=document.querySelector(".warningLevelSetting");
const totalCostElem=document.querySelector(".totalSettings");
  const callCostElem=document.querySelector(".callTotalSettings");
const smsCostElem=document.querySelector(".smsTotalSettings");


const billWithSettings = BillWithSettings();

var smsCostVal=0;
var callCostVal=0;
var warnLevel=0;
var critLevel=0;

var smsCostTotal=0;
var callCostTotal=0;
var allCostTotal=0;
 
function tCostOfBill(billItemType) {
  if(allCostTotal < critLevel){
            if (billItemType === "call") {
        callCostTotal += callCostVal;
              allCostTotal += callCostVal;
            }
            else if (billItemType === "sms") {
        smsCostTotal += smsCostVal;
                
              allCostTotal += smsCostVal;
            }
        }
}
function styleTotal(roundedBillTotal){ 
      const currTotal=Number(roundedBillTotal);
    color.classList.remove("danger");
    color.classList.remove("warning");
 if(currTotal>=warnLevel && currTotal<critLevel)
    {//make orange
color.classList.add("warning");
    }
    
else if(currTotal>=critLevel){
        //make red
        color.classList.add("danger")
    } 
    
}
function clicked(){

 var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  var item = radioSmsCall.value;  

  tCostOfBill(item);    
callCostElem.innerHTML =callCostTotal.toFixed(2);
    smsCostElem.innerHTML = smsCostTotal.toFixed(2)
    totalCostElem.innerHTML = allCostTotal.toFixed(2);
styleTotal(allCostTotal);
  
}
function update(){
  
 callCostVal=Number(callCost.value);
  smsCostVal=Number(smsCost.value);
   warnLevel=Number(warningLevel.value);
 critLevel=Number(criticalLevel.value);
    styleTotal(allCostTotal); 

    }
btnAdd.addEventListener("click",clicked);
btnUpd.addEventListener("click",update);