//api key i created on the weathermap site
var apiKey="e8f779b30d9bec703742332c39c699e7"
var dashboardEl=document.getElementById("dashboard")
//function to pull weathermap api
function currentWeather(cityName){
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        dashboardEl.innerHTML=` <h3> ${data.name} ${dayjs.unix(data.dt).format("MM/DD/YYYY")} <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></h3>
        <p>Temp:${data.main.temp}</p>
        <p>Wind Speed:${data.wind.speed}</p>
        <p>Humidity:${data.main.humidity}</p>`
    })
}
function fivedayForecast(cityName){
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        for(var i=3; i<data.list.length; i=i+8){
            var fiveDayArr=data.list
            console.log(fiveDayArr[i])
        }
    })
}


//calls the currentWeather function
currentWeather('Chicago')
//calls fivedayForecast
fivedayForecast('Chicago')