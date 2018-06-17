var Toaster = function () {
    var burn = 10;
    function cookTime(time) {
        if (burn - time < 0) {
            burn = 10;
            console.log('You burnt your toast :(. Get some new toast!')
        }
        else {
            burn = burn - time;
            console.log(burn);
            console.log('Enjoy your toast! Or cook it again.');
        }
    }

    return {
        power: 3,
        checkPower: function () {
            console.log("Your power is " + this.power);
            console.log('The recommended power for this toaster is 1 - 5.');
        },
        changePower: function (heat) {
            this.power = heat;
        },
        start: function (time) {
            time = time * this.power;
            console.log(time);
            cookTime(time);
        }
    };
};
var coolToaster = Toaster();