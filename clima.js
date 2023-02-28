

let cityName = document.getElementById("cityName");
const cityTemp = document.getElementById("cityTemp");
const weatherIcon = document.getElementById("cityIcon");
const minTemp = document.getElementById("min");
const maxTemp = document.getElementById("max");
const sensacion = document.getElementById("sensacion");
const humedad = document.getElementById("humedad");
const formInput = document.getElementById("form");    
const SearchInput = document.getElementById("search");



const getWeather = async (city)  => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69a98cea33d11d79e58b77a88ca3a546&units=metric&lang=sp`)
    const data = await res.json()
    .then(data => {

        const minTempR = Math.round(data.main.temp_min);
        const maxTempR = Math.round(data.main.temp_max);
        const sensTempR = Math.round(data.main.feels_like);
        const principalTempR = Math.round(data.main.temp);

        cityName.textContent = data.name;
         cityTemp.textContent=`${principalTempR}º`;
         minTemp.textContent=`Min ${minTempR}º`;
         maxTemp.textContent=`Max ${maxTempR}º`;
        sensacion.textContent=`${sensTempR}º`;
         humedad.textContent=`${data.main.humidity}%`;
    })
     
}


formInput.addEventListener("click", e => {
     e.preventDefault()
     getWeather(SearchInput.value)

})
