const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "18e7142935msh300407594275d15p1de239jsnbeeb7841dd08",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humid2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind2.innerHTML = response.wind_speed
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

const getWeatherforMumbai = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      TempM.innerHTML = response.temp;
      HumidM.innerHTML = response.humidity;
      WindM.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

const getWeatherforDenver = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Denver",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        TempD.innerHTML = response.temp;
        HumidD.innerHTML = response.humidity;
        WindD.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  };

  const getWeatherforRussia = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Russia",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        TempR.innerHTML = response.temp;
        HumidR.innerHTML = response.humidity;
        WindR.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  };

  const getWeatherforJapan = () => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Japan",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        TempJ.innerHTML = response.temp;
        HumidJ.innerHTML = response.humidity;
        WindJ.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  };

getWeather("Delhi")
getWeatherforMumbai()
getWeatherforDenver()
getWeatherforRussia()
getWeatherforJapan()