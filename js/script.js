
function start(){
    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();
    // Appel de la fonction fetchTodayForecast
  
    apiWeather.fetchTodayForecast().then(function(response) {
        // Récupère la donnée d'une API
        const data = response.data;
  
        // On récupère l'information principal
        const main = data.weather[0].main;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
  
        // Modifier le DOM
        document.getElementById('today-forecast-main').innerHTML = main;
        document.getElementById('today-forecast-more-info').innerHTML = description;
        document.getElementById('icon-weather-container').innerHTML = icon;
        document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
       
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

      
    apiWeather.getThreeDayForecast().then(function(response){
      // Récupère la donnée d'une API
      var data = response.data;

      console.log(data);

      for(var i=0; i<data.cnt; i++)
      {
        console.log(i);
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.getElementById('today-forecast-main_day' + i).innerHTML = main;
        document.getElementById('today-forecast-more-info_day' + i).innerHTML = description;
        document.getElementById('icon-weather-container_day' + i).innerHTML = icon;
        document.getElementById('today-forecast-temp_day' + i).innerHTML = `${temp}°C`;
      }
    })
}

