describe("The radio button bill factory functions", function(){

    it ("should be able to give call total when 'call' is entered", function() {

        let radioInstance = RadioBill();

        radioInstance.radioBtns('call');

        assert.equal(2.75, radioInstance.getTotalCost());

    });

    it ("should be able to give call total when 'call' is entered four times", function() {

        let radioInstance = RadioBill();

        radioInstance.radioBtns ('call');
        radioInstance.radioBtns ('call');
        radioInstance.radioBtns ('call');
        radioInstance.radioBtns ('call');


        assert.equal(11, radioInstance.getTotalCost());
    });

    it ("should be able give sms total when sms is entered", function() {

        let radioInstance = RadioBill();

        radioInstance.radioBtns ('sms');

        assert.equal(0.75, radioInstance.getTotalCost());
    });

    it ("should be able to give sms total when 'sms' is entered more than once", function() {

        let radioInstance = RadioBill();

        radioInstance.radioBtns ('sms');
        radioInstance.radioBtns ('sms');
        radioInstance.radioBtns ('sms');
        radioInstance.radioBtns ('sms');

        assert.equal(3, radioInstance.getTotalCost());
    });

    it ("should be able to give totals when 'sms & call' is entered", function() {

        let radioInstance = RadioBill ();

        radioInstance.radioBtns ('call');
        radioInstance.radioBtns ('call');
        radioInstance.radioBtns ('sms');

        assert.equal(6.25, radioInstance.getTotalCost());
    });

    describe("The Danger & Warning Level for Radio Button Bill", function() {
        it ("should be able to return class name 'critical' when critical level is reached", function() {
             
            let radioInstance = RadioBill();

            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');


            assert.equal(55, radioInstance.getTotalCost());
            assert.equal("danger", radioInstance.styleTotalColor());
        });

        it("should be able to return class name ' warning' when danger level is reached", function() {

            let radioInstance = RadioBill();

            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');

            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');

            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');
            radioInstance.radioBtns('call');

            assert.equal(33, radioInstance.getTotalCost());
            assert.equal("warning", radioInstance.styleTotalColor());
        });
    });
});
