describe("The text input bill factory function", function(){
    it("should be able to make a call and return cost", function (){
        let textBill = calculateTextBill();
        textBill.textBillTotal("call");
        assert.equal(2.75, textBill.getCallTotal());
    });

    it("should be able to send sms and return cost", function(){
        let textBill = calculateTextBill();
        textBill.textBillTotal("sms");

        assert.equal(0.75, textBill.getSmsTotal());
    });

    it("should be able to make both sms and call and return the total", function (){
        let textBill = calculateTextBill();
        textBill.textBillTotal("sms");
        textBill.textBillTotal("call");
        assert.equal(3.50, textBill.getTotal());
        
    });
});