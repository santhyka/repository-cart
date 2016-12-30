++++++++++++++++++++++++
HTML FORM
++++++++++++++++++++++++

First Name Last Name Email Phone Comment <textarea name="message" placeholder="Optional" id="comments"></textarea>
Send Order

++++++++++++++++++++
SIMPLECARTJS SCRIPT?
++++++++++++++++++++
simpleCart({
//Setting the Cart Columns for the sidebar cart display.
cartColumns: [
//{ attr: "image", label: false, view: "image"},
//Name of the item
{ attr: "name" , label: "Item" },
//Quantity displayed as an input
{ attr: "quantity", label: "Qty", view: "input"},

        //Built in view for a remove link
        { view:'remove', text: "X", label: "Del"},

        //Price of item
        //{ attr: "price", label: "Price", view: "currency"},
        //Subtotal of that row (quantity of that item * the price)
        { attr: "total" , label: "SubTot", view: "currency"  }
    ],
    cartStyle: "table" ,
    checkout: {
    type: "SendForm" ,
    url: "sendcart.php" ,
    method: "POST" ,
    success: "success.html" ,
    cancel: "cancel.php" ,
    extra_data: {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        email: document.getElementById("phone").value,
        email: document.getElementById("comments").value,
    cartid: "12321321"
}
}

});

simpleCart.bind( 'beforeCheckout' , function( data ){
data.first_name = document.getElementById("first_name").value;
data.last_name = document.getElementById("last_name").value;
data.email = document.getElementById("email").value;
data.phone = document.getElementById("phone").value;
data.comments = document.getElementById("comments").value;
});

++++++++++++++
sendcart.php
++++++++++++++