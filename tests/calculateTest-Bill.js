describe("The calculate bill factory function", function () {
    it("should be able to set call and sms cost", function () {
        let calculate = totalPhoneBill("call, sms, call, sms");

        assert.equal(7.00, calculate);

    })

});