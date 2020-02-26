// aktualne kursy walut
$.ajax({
    url: 'http://api.nbp.pl/api/exchangerates/tables/C/',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        printCurrencys(data);
    }
})

//wybranie tylko kursów potrzebnych walut
function printCurrencys(data){
    document.getElementsByClassName("currency").innerHTML ="";
    const currencyList = data[0].rates;
    for (i=0; i<currencyList.length; i++){
        let currency = currencyList[i].code;
        document.getElementsByClassName("currency").innerHTML
    }
}