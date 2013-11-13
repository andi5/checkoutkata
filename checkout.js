var Cart = function Cart() {
    var total = 0;

//    var items = {
//        "A": 0,
//        "B": 0,
//        "C": 0,
//        "D": 0
//    };

    var itemMatrix = {
        "A" : 150,
        "B" : 200
    };

//    var reducedItemMatrix = {
//        "A": 100
//    };

    return {
        total: function () {
            return total;
        },

        addItem: function (item) {
            var price = itemMatrix[item] ? itemMatrix[item] : 0;
            total += price;
        }
    }
};

module.exports = Cart;
