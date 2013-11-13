var Cart = function Cart() {
    var items = {
        "A": 0,
        "B": 0
    };

    var itemMatrix = {
        "A" : 150,
        "B" : 200
    };

    var reducedItemMatrix = {
        "A": 100,
        "B": 200
    };

    return {
        total: function () {
            var sum = 0;
            for(var key in items) {
                var numberOfReducedPackages = Math.floor(items[key] / 3);
                var reducedSinglePrice = reducedItemMatrix[key];
                var priceOfReducedItems = reducedSinglePrice * numberOfReducedPackages * 3;
                sum += priceOfReducedItems;

                var unreducedSinglePrice = itemMatrix[key];
                var numberOfUnreducedItems = (items[key] % 3);
                var priceOfNonReducedItems = unreducedSinglePrice * numberOfUnreducedItems;
                sum += priceOfNonReducedItems;
            }
            return sum;
        },

        addItem: function (item) {
            if (!itemMatrix[item]) return;
            items[item] += 1
        }
    }
};

module.exports = Cart;
