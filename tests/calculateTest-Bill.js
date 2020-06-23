describe("The calculate bill factory function" , function() {
    describe("set values", function() {
    it("should be able to set the call cost", function() {
        settingsBill.setCriticalLevel(10);
        let settingsBill = BillWithSettings();
        
        settingsBill.getCallCost(1.85);
       assert.equal(1.85, settingsBill.getCallCost());

       let settingsBill2 = BillWithSettings();
       settingsBill2.setCallCost(2.75);
       assert.equal(2.75, settingsBill2.setCallCost());
    });
});
    });