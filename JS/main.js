//Using the id from index.html to make the function run


function getWeather() {
    let City = document.getElementById("City");
    let Today = document.getElementById( "Today");
    let Icon = document.getElementById("Icon");
    let Temp = document.getElementById("Temp");
    let Wind = document.getElementById("Wind");
    let Humidity = document.getElementById("Humidity");
    let UVIndex = document.getElementById("UV-Index");


    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "f146799a557e8ab658304c1b30cc3cfd";



    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° F";

        let wind = data.main.wind;
        wind.innerHTML = wind + " MPH";

        let humidity = data.main.humidity;
        humidity.innerHTML = humidity + " %";

        let UVIndex = data.main.UVIndex;
        UVIndex.innerHTML = UVIndex + " ";

        location.innerHTML =
          data.name + " (" + latitude + "°, " + longitude + "°)";
        description.innerHTML = data.weather[0].main;
      });
    


    
  
    
    
    
    
    