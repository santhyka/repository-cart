function scs()
{
	simpleCart.empty();
	$('#pembayaran').show();
	$('#pemesanan').hide();
	$('#mycart').hide();
}
function opensucces() {
  var $_GET = {};
	if(document.location.toString().indexOf('?') !== -1) {
	    var query = document.location
	                   .toString()
	                   // get the query string
	                   .replace(/^.*?\?/, '')
	                   // and remove any existing hash string (thanks, @vrijdenker)
	                   .replace(/#.*$/, '')
	                   .split('&');
	
	    for(var i=0, l=query.length; i<l; i++) {
	       var aux = decodeURIComponent(query[i]).split('=');
	       $_GET[aux[0]] = aux[1];
	    }
	}
	//get the 'index' query parameter
	if($_GET['success'] == "do")
	{
		scs();
	}
	else if($_GET['success'] == "not")
	{
		alert('Invoice not send!');
	}
}

});
function shopping_cart (step) {
	if(step == "mycart")
	{
		$('#mycart').show();
		$('#pemesanan').hide();
		$('#pembayaran').hide();
	}
	else if(step == "pemesanan")
	{
		// jika item kosong tidak bisa ke pemesanan
		var item_cart = document.getElementById("jumlah_item");
		if(item_cart.innerHTML == "0")
		{
			alert("Your cart is empty!");
		}
		else 
		{
			// get detail
			var detail_cart 		= document.getElementById("tableCart");
			var detail_payment 		= document.getElementById("cart-payment");
			var order_total_count 	= document.getElementById("cart_total");
			$("[name='smanagerisicart']").val(detail_cart.innerHTML);
			$("[name='smanagerpaymin']").val(detail_payment.innerHTML);
			$("[name='smanagertotal']").val(order_total_count.innerHTML);
			// get url
			pathArray = window.location.href.split( '/' );
			protocol = pathArray[0];
			host = pathArray[2];
			url = protocol + '//' + host;
			$("[name='smanagerurltoko']").val(url);
			// open tab
			$('#pemesanan').show();
			$('#mycart').hide();
			$('#pembayaran').hide();
		}
	}
}
