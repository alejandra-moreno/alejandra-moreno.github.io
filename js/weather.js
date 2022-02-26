$(document).ready(function() {
    $("#form-sub").submit(function(event) { 
        performSearch(event); });
  });

  function performSearch(event) {
    var request;
    event.preventDefault();
    $("#city-name").text("Searching ...");
    $("#city-temp").text("");
    $("#img-weather").attr('src', "");
    $("#city-weather").text("");
  
    //Enviamos la petición
    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: { q: $("#city").val(), 
                appid: '63a495f5991662e3c22e99458185d2ba', // put your appid
                units: 'metric'
              }
    });
  
    //La petición se ha resuelto correctamente
    request.done(function (response){
        formatSearchResults(response);
        console.log('OpenWeatherAPP response',response);
    });
    
    //Si ha habido un error
    request.fail(function (){
        $("#city-name").text("Por favor, introduzca un nombre de ciudad válido");
        $("#city-temp").text("");
        $("img").attr('src', "");
        $("#city-weather").text("");
    });
  
  }

  function formatSearchResults(jsonObject) {
    
    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    var city_temp_max = jsonObject.main.temp_max;
    var city_temp_min = jsonObject.main.temp_min;
    var imgurl  = 'http://openweathermap.org/img/wn/' + jsonObject.weather[0].icon + '@2x.png';
    $("#img-weather").attr('src', imgurl);
    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text("Temperatura actual : "+city_temp+" °C"); 
    $("#city-temp-max").text("Máxima : "+city_temp_max+" °C");
    $("#city-temp-min").text("Mínima : "+city_temp_min+" °C"); 
  }