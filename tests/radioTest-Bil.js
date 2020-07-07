describe("The radio bill factory function", function () {
    it("should be able to set call cost", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        assert.equal(2.75, radio.getCallCost());

        let radio2 = rad();
        radio2.setCallCost(1.85);
        assert.equal(1.85, radio2.getCallCost());
    })

    it("should be able to set sms cost", function () {
        let radio = rad();

        radio.setSmsCost(0.75);
        assert.equal(0.75, radio.getSmsCost());

        let radio2 = rad();
        radio2.setSmsCost(0.65);
        assert.equal(0.65, radio2.getSmsCost());
    })

    it("should be able to set sms and call cost", function () {
        let radio = rad();

        radio.getCallCost(2.75);
        radio.getSmsCost(0.85);

        radio.setSmsCost(0.85);
        radio.setCallCost(2.75);

        assert.equal(0.85, radio.getSmsCost());
        assert.equal(2.75, radio.getCallCost());

        let radio2 = rad();

        radio2.setCallCost(1.75);
        radio2.setSmsCost(0.65);

        assert.equal(1.75, radio2.getCallCost());
        assert.equal(0.65, radio2.getSmsCost());

    })

    it("should be able to set warning level", function () {

        let radio = rad();

        radio.setWarningLevel(20);

        assert.equal(20, radio.getWarningLevel());

    })


    it("should be able to set danger level", function () {

        let radio = rad();

        radio.setDangerLevel(30);

        assert.equal(30, radio.getDangerLevel());

    })



    it("should be able to set warning and danger level", function () {

        let radio = rad();

        radio.setWarningLevel(20);
        radio.setDangerLevel(30);

        assert.equal(20, radio.getWarningLevel());
        assert.equal(30, radio.getDangerLevel());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        radio.setSmsCost(0.75);
        radio.setWarningLevel(20);
        radio.setDangerLevel(30);

        radio.makeCall();
        radio.makeCall();
        radio.makeCall();

        assert.equal(8.25, radio.getTotalCost());
        assert.equal(8.25, radio.getTotalCallCost());
        assert.equal(0.00, radio.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        radio.setSmsCost(0.75);
        radio.setWarningLevel(20);
        radio.setDangerLevel(30);

        radio.sendSms();
        radio.sendSms();
        radio.sendSms();

        assert.equal(2.25, radio.getTotalCost());
        assert.equal(0.00, radio.getTotalCallCost());
        assert.equal(2.25, radio.getTotalSmsCost());
    })

    it("should be able to send sms's and also make calls", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        radio.setSmsCost(0.75);
        radio.setWarningLevel(20);
        radio.setDangerLevel(30);

        radio.makeCall();
        radio.makeCall();
        radio.makeCall();
        radio.makeCall();
        radio.sendSms();
        radio.sendSms();
        radio.sendSms();
        radio.sendSms();

        assert.equal(14.00, radio.getTotalCost());
        assert.equal(11.00, radio.getTotalCallCost());
        assert.equal(3.00, radio.getTotalSmsCost());
    });
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        radio.setSmsCost(0.75);
        radio.setWarningLevel(5);
        radio.setDangerLevel(10);

        radio.makeCall();
        radio.sendSms();
        radio.sendSms();
        radio.makeCall();
        assert.equal("warning", radio.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        radio.setSmsCost(0.75);
        radio.setWarningLevel(5);
        radio.setDangerLevel(10);

        radio.makeCall();
        radio.sendSms();
        radio.sendSms();
        radio.sendSms();
        radio.makeCall();
        radio.makeCall();
        assert.equal("danger", radio.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        radio.setSmsCost(0.75);
        radio.setWarningLevel(5);
        radio.setDangerLevel(20);

        radio.makeCall();
        radio.sendSms();
        radio.sendSms();
        radio.sendSms();
        radio.makeCall();
        radio.makeCall();
        radio.makeCall();

        assert.equal(11.00, radio.getTotalCallCost());
        assert.equal(2.25, radio.getTotalSmsCost());
        assert.equal("warning", radio.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let radio = rad();

        radio.setCallCost(2.75);
        radio.setSmsCost(0.75);
        radio.setWarningLevel(5)
        radio.setDangerLevel(10);

        radio.makeCall();
        radio.sendSms();
        radio.sendSms();
        radio.sendSms();
        radio.makeCall();
        radio.makeCall();

        assert.equal(8.25, radio.getTotalCallCost());
        assert.equal(2.25, radio.getTotalSmsCost());
        assert.equal("danger", radio.totalClassName());

    });
});
