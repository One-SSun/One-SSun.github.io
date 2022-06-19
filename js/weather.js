const API_KEY = "fe8e82dde88ceb230fd05a8a90233665";

function GeoYes(userPosition){
    const lat = userPosition.coords.latitude;
    const long = userPosition.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
        const userWeather = document.querySelector(".weather span:last-child");
        const userCity = document.querySelector(".weather span:first-child");
        userWeather.innerText = `${data.weather[0].main}`
        userCity.innerText = `${data.name}, `;
    });
        
};

function GeoNo(){
    alert("Can't find weatehr for you!")
};




navigator.geolocation.getCurrentPosition(GeoYes, GeoNo);