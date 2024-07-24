
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

let btn = document.getElementById('search-button').addEventListener('click', () => {
    let city = document.getElementById('city-input');
    let cityName = document.getElementById('city-name');
    let temprature = document.getElementById('temperature');
    let description = document.getElementById('description');
    let humidity = document.getElementById('humidity');
    let imgTemp = document.getElementById('imgTemp');
    let localTime = document.getElementById('localTime');
    let map = document.getElementById('map');
    let feelsLike = document.getElementById('feels-like');
    let capital = document.getElementById('capital');
    let windSpeed = document.getElementById('wind-speed');
    fetch("http://api.weatherapi.com/v1/current.json?key=8a7734346ab643e89f1151748242207&q=" + city.value.toLowerCase() + "&aqi=no", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            cityName.innerText = city.value.toUpperCase() + ", " + result.location.country.toUpperCase() + ".";
            temprature.innerText = "Temprature: " + result.current.temp_c + " °C";
            localTime.innerText = "Local Time: " + result.location.localtime.slice(10);
            feelsLike.innerText = "Feels Like: " + result.current.feelslike_c + " °C"
            imgTemp.style.display = "block";
            imgTemp.src = "https:" + result.current.condition.icon;
            description.innerText = "Description: " + result.current.condition.text;
            humidity.innerText = "Humidity: " + result.current.humidity + " %";
            windSpeed.innerText = "Wind Speed: " + result.current.wind_kph + " Kph";
            capital.innerText = "The capital city of " + result.location.country + " is " + result.location.tz_id.split("/").pop();



            console.log(result)
        })

        .catch((error) => {
            console.error(error)
            cityName.innerText = "There is no such City - Reloading Page....";
            temprature.style.display = "none";
            description.style.display = "none";
            humidity.style.display = "none";
            imgTemp.style.display = "none";
            feelsLike.style.display = "none";
            windSpeed.style.display = "none";
            setTimeout(function () { location.reload(); }, 3000);
        });

})






