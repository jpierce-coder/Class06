const cityInputElem = document.querySelector('input');
const btnSearch = document.getElementById('btnSearch')

btnSearch.addEventListener('click',fetchWeather)



function fetchWeather(event) {
    event.preventDefault();
    fetch(
        'https://api.openweather.org/data/2.5/weather?q=springfield&appid=5da41c3f3d55282658066187f8af4419&units=metric'
    ).then((resp) => {
        return resp.json();
    }).then((weather) => {
        console.log(weather);
    })

    console.log('getWeather');
}

