function radioBill() {

    var callsTotal = 0;
    var smsTotal = 0;
    var total = 0;

    function theBillTotal(billItemInserted) {

        if (billItemInserted === "call"){
            callsTotal += 2.75;
        }
        else if (billItemInserted === "sms"){
            smsTotal += 0.75;
        }
    }

    function totalCalls(){
        return callsTotal;
    }

    function totalSms(){
        return smsTotal;
    }

    function theOverallTotal(){

        return callsTotal + smsTotal
    }

    function criticalLevel(){
        return 50;
    }

    function warningLevel(){
        return 30;
    }

    function totalClassName(){

        if(theOverallTotal() >= criticalLevel()) {
            return "danger"
        }
        
        if (theOverallTotal() >= warningLevel()) {
            return "warning"
        }
    }

    return {
        theBillTotal,
        totalCalls,
        totalSms,
        theOverallTotal,
        totalClassName,
       
    }
}