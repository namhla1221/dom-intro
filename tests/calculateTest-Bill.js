describe("The calculate bill factory function", function () {
    
    it("should be able to set call and sms cost", function () {
        let totalPhoneBill = TotalPhoneBill();
        totalPhoneBill.calculate("call, sms, call, sms")
        assert.equal(7.00, totalPhoneBill.getTotal());
    })
    it("should be able to set warning level", function () {
        let totalPhoneBill = TotalPhoneBill();
        totalPhoneBill.calculate("call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call")
        assert.equal("warning", totalPhoneBill.style());
    })
    it("should be able to set danger level", function () {
        let totalPhoneBill = TotalPhoneBill();
        totalPhoneBill.calculate("call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call,call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call")
        assert.equal("danger", totalPhoneBill.style());
    })

});