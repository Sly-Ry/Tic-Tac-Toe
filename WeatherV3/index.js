const app = document.querySelector('.weather');
const time = document.querySelector('.time');
const cities = document.querySelectorAll('.city');

// gets date
let date = new Date()

let day = getDate(date.getDay());
let month = getMonth(date.getMonth());
let monthNum = date.getMonth() + 1;
let year = date.getFullYear(); 

console.log(year);

document.querySelector('.date').innerHTML = `${day} ` + `${monthNum} `+ `${month} `  + `${year}`;

function getDate(n) {
    console.log(n);
    switch (n) {
        case 0:
            name = "S";
          break;
        case 1:
            name = "M";
          break;
        case 2:
            name = "T";
          break;
        case 3:
            name = "W";
          break;
        case 4:
            name = "Th";
          break;
        case 5:
            name = "F";
          break;
        case 6:
            name = "St";
    }
    return name;
};

function getMonth(n) {
   
    switch(n) {
        case 1: 
            name = "Jan"
          break;
        case 2: 
            name = "Feb"
          break;
        case 3: 
            name = "Mar"
            break;
        case 4: 
            name = "Apr"
            break;
        case 5: 
            name = "May"
            break;
        case 6: 
            name = "Jun"
            break;
        case 7: 
            name = "Jul"
            break;
        case 8: 
            name = "Aug"
            break;
        case 9: 
            name = "Sept"
            break;
        case 10: 
            name = "Oct"
            break;
        case 11: 
            name = "Nov"
            break;
        case 12: 
            name = "Dec"
    }
    return name;
};


// Current Time
var myVar = setInterval(function() {
    myTimer();
}, 1000);
  
function myTimer() {
    var d = new Date();
    document.querySelector(".time").innerHTML = d.toLocaleTimeString();
}

// Click event per city
cities.forEach((city) =>{
    city.addEventListener("click", (e) => {
        // Changes default to clicked
        c = e.target.innerHTML;

        // Fetch and display weather using the Weather API
        fetchWeather.getWeather(c);

        // fancy styling: Fade out
        app.style.opacity = "0";
    });
});

// gets current Date
function dayOfTheWeek(day, month, year) {
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


let fetchWeather = {

    "apiKey": "2632ab542fff737012a28d74931b6af5",

    getWeather: function(city){
        
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => 
            this.displayWeather(data)
        );
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

        // Searched Time
        let unix_timestamp = data.dt;
        console.log(unix_timestamp);

        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        
        // Hours part from the timestamp
        var hours = date.getHours();

        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();


        // Will display time in 10:30:23 format
        document.querySelector(".time").innerHTML = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        console.log(document.querySelector(".time").innerHTML);

        this.backgroundImageChange(description);

        document.querySelector(".loading").classList.remove("loading");

        // if (document.querySelector(".loading").classList = 'loading') {
        //     document.querySelector(".loading").classList.remove("loading");
        // } else  if (document.querySelector(".loading").classList != 'loading'){
        //     document.querySelector(".loading").classList = "";
        // };
    },
    backgroundImageChange: function(description){
        console.log(description);

        app.style.opacity = "1";

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
    },
    search: function() {
        this.getWeather(document.querySelector(".search-bar").value);
    }
};

// Button Search
document.querySelector(".search button").addEventListener("click", function() {
    if (search.value.length == 0) {
        alert("Enter city name");
    }
    else {
        // changes default city to searched value
        c = search.value;

        //  initialize fetch call
        fetchWeather.search();

        //  clears search bar
        search.value = "";

        //  fade out styling
        app.style.opacity = "0";
    }

    e.preventDefault();
});

// "Enter" Search
document.querySelector(".search-bar").addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        fetchWeather.search();
    }
});




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
    