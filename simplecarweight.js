var delivery_cols = ["Weight Limit", "Price"];
var delivery = [["10", "10"], ["20", "15"], ["40", "20"], ["60", "30"], ["70", "40"], ["100", "50"]];
var debug = false;

function getDeliveryCost(calculated_weight) {
    if(0.0 == calculated_weight) {
        return 0.0;
    }
    var i = 0;
    while(calculated_weight > parseFloat(delivery[i][0]) && i < delivery.length) {
        i++;
    }

    var calculated_delivery = parseFloat(delivery[i][1]);
    if(debug) {
        alert("Delivery cost " + calculated_delivery + " for weight " + calculated_weight + " limit is " + delivery[i][0] + " i is " + i);
    }
    return calculated_delivery;
}

simpleCart.shippingByWeight = true;
simpleCart.shipping_old=simpleCart.shipping;
simpleCart.shipping=function() {
        if(true != simpleCart.shippingByWeight) {
            return simpleCart.shipping_old();
        }
        if(debug) {
            alert("shipping!");
        }
        if( parseInt(simpleCart.quantity,10)===0 )
            return 0;
        var shipping =  parseFloat(simpleCart.shippingFlatRate) + 
                        parseFloat(simpleCart.shippingTotalRate)*parseFloat(simpleCart.total) +
                        parseFloat(simpleCart.shippingQuantityRate)*parseInt(simpleCart.quantity,10),
            nextItem,
            next;
        weight = 0.0;
        for(next in simpleCart.items){
            nextItem = simpleCart.items[next];
            if(nextItem.weight) {
                if(debug) {
                    alert("have weight " + nextItem.weight);
                }
                weight += parseFloat(nextItem.weight);
            } else if( nextItem.shipping ){
                if( typeof nextItem.shipping == 'function' ){
                    shipping += parseFloat(nextItem.shipping());
                } else {
                    shipping += parseFloat(nextItem.shipping);
                }
            }
        }
        if(0.0 != weight) {
            shipping = getDeliveryCost(weight);
        }

        return shipping;
}