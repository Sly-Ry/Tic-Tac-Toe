let fetchWeather = {
    "apiKey": "2632ab542fff737012a28d74931b6af5",
    getWeather: function(city){
        console.log(city)
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => 
        this.displayWeather(data));
    },
    // display weather for searched city 
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { all } = data.clouds;
        const {lon, lat} = data.coord

        document.querySelector(".name").innerText = name
        document.querySelector(".icon").src = 
            "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".cloud").innerText = all + "%";
        document.querySelector(".temp").innerText = Math.floor(temp) + "°C"
        document.querySelector(".humidity").innerText = humidity +"%"
        document.querySelector(".wind").innerText = speed + " km/h"
        
        document.querySelector(".loading").classList.remove("loading");

        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?'" + name + "')";
    },
    search: function() {
        this.getWeather(document.querySelector(".search-bar").value);
    }
};

// Button Search
document.querySelector(".search button").addEventListener("click", function() {
    fetchWeather.search();
});

// "Enter" Search
document.querySelector(".search-bar").addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        fetchWeather.search();
    }
});

const cities = document.querySelectorAll('.city');

// Click event per city
cities.forEach((city) =>{
    city.addEventListener("click", (e) => {
        // Changes default to clicked
        c = e.target.innerHTML;

        // Fetch and display weather using the Weather API
        fetchWeather.getWeather(c);

        // fancy styling: Fade out
        app.style.opacity = '0';
    });
});


const time = document.querySelector(".time");

// gets current Date
function currentDate(day, month, year) {
    const weekday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    return weekday[new Date(`${day}/${month}/${year}`).getDate()];
}

let timeOfDay = "day";

// const code = data.current.condition.code;

// if(!data.current.is_day) {
//     timeOfDay = "night"
// }

// if (code == 1000) {
    
//}


// // DOM elements
// const weather = document.querySelector(".weather");
// const temp = document.querySelector(".temp");
// const date = document.querySelector(".date");
// const time = document.querySelector(".time");
// const condition = document.querySelector(".time");
// const name = document.querySelector(".name");
// const icon = document.querySelector(".icon");
// const cloud = document.querySelector(".cloud");
// const humidity = document.querySelector(".humidity");
// const wind = document.querySelector(".wind");
// const form = document.getElementById("search-bar");
// const search = document.querySelector(".search");
// const btn = document.querySelector(".submit");
// const cities = document.querySelectorAll('.city');

// // Default loading city
// let cityInput = "Austin";

// // Click event per city
// cities.forEach((city) =>{
//     city.addEventListener("click", (e) => {
//         // Changes default to clicked
//         cityInput = e.target.innerHTML;

//         // Fetch and display weather using the Weather API
//         fetchWeather()

//         // fancy styling: Fade out
//         app.style.opacity = '0';
//     });
// });

// // Form btn event click
// form.addEventListener('submit', (e) => {
//     // error handling: no user input upon submit
//     if (search.value.length == 0) {
//         alert("Enter city name");
//     }
//     else {
//         // changes default city to searched value
//         cityInput = search.value;

//         //  initialize fetch call
//         fetchWeather();

//         //  clears search bar
//         search.value = "";

//         //  fade out styling
//         app.style.opacity = "0";
//     }

//     e.preventDefault();
// });

// // gets current Date
// function currentDate(day, month, year) {
//     const weekday = [
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//         "Sunday"
//     ];

//     return weekday[new Date(`${day}/${month}/${year}`).getDate()];
// }

// // function that fetches weather data
// function fetchWeather() {
//     fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q=" 
//             + `${cityInput}`  
//             + "&units=metric&appid=" 
//             + this.apiKey
//         )
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);

//         }
// };





// 3.0 API (payment required)
// getLocation: function(city) {
//     fetch (
//         "http://api.openweathermap.org/geo/1.0/direct?q="
//         + {city}
//         + "&limit="
//         + 1
//         + "&appid=" 
//         + apiKey
//     )
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         const lat = data.lat
//         const lon = data.lon
//         getWeather(lat, lon);
//     })
// },

// getWeather: function(lat, lon){
//     fetch(
//         "https://api.openweathermap.org/data/3.0/onecall?lat=" 
//         + {lat} 
//         + "&lon=" 
//         + {lon} 
//         + "&appid=" 
//         + this.apiKey
//     )
//     .then((response) => response.json())
//     .then((data) => 
//     this.displayWeather(data));
    