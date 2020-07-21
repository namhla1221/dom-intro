
function TotalPhoneBill() {
    var billTotal = 0;

    function calculate(billString) {
        var billItems = billString.split(",");
        billTotal = 0;

        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();

            if (billItem === "call") {
                billTotal += 2.75;
            }

            else if (billItem === "sms") {
                billTotal += 0.75;
            }

        }
    }

    function getTotal(){
        return billTotal;
    }
    function style (){
        if (billTotal >= 30) {
            return "danger";
    
        } else if (billTotal >= 20 && billTotal < 30) {
            return "warning";
    
        }
    }

    return {
        calculate ,
        getTotal,
        style,
    }

}