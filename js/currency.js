//Enviamos la petición
/*request = $.ajax({
    url: 'http://api.exchangeratesapi.io/v1/latest?access_key=9de4bfca2f17a82c4ebbb4fcc0ca22a5',
    type: "GET",
});*/

$(document).ready(function() {
    $("#currency-sub").submit(function(event) { 
        calculate(event); });
  });

// Fetch exchange rates and update the DOM
function calculate(event) {
    event.preventDefault();

    var request;
    const currency_one = $("#currency-one").val();
    const currency_two = $("#currency-two").val();
    const amountEl_one = $("#amount-one").val();
    const amountEl_two = $("#amount-two").val();
    const rateEl = $("#rate").val();
    const swap = $("#swap").val();

    request = $.ajax({

        url: 'https://v6.exchangerate-api.com/v6/3d89d01610b2e86f4e22e152/latest/'+currency_one,
        type: "GET",
        data: {
              }
    });

    request.done(function (response){
        const rate = response.conversion_rates[currency_two];
        document.getElementById("amount-two").value = ($("#amount-one").val() * rate).toFixed(2);
        console.log('Currency exchange response',response);
    });
}