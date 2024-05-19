//api key i created on the weathermap site
var apiKey="e8f779b30d9bec703742332c39c699e7"

//function to pull weathermap api
function currentWeather(cityName){
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}
//calls the currentWeather function
currentWeather('Chicago')