// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
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