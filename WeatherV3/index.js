// DOM elements
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const condition = document.querySelector(".time");
const name = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloud = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const form = document.getElementById("search-bar");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll('.city');

// Default loading city
let cityInput = "Austin";

// Click event per city
cities.forEach((city, (e) => {
    // Changes default to clicked
    cityInput = e.target.innerHTML;

    // Fetch and display weather using the Weather API
}));