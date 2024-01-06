const searchField = document.querySelector('.searchField');
const form = document.querySelector('form');

function updateWeather(data){
    const {condition, feelslike_c} = data;
    const conditionNode = document.querySelector('.condition');
    const temp = document.querySelector('.temp');
    const img = document.querySelector('img');
    conditionNode.textContent = condition.text;
    temp.textContent = feelslike_c + '\u00B0C';
    img.src = condition.icon; 
}

function updateLocation(data){
    const {name, localtime} = data;
    const location = document.querySelector('.location');
    const time = document.querySelector('.time');
    location.textContent = name;
    time.textContent = localtime;
}
async function fetchData(target){
    const loading = document.querySelector('.loading');
    const endPoint = `http://api.weatherapi.com/v1/current.json?key=53879b5faa5b400fa59135508240301&q=${target}&aqi=yes`;
    const res = await fetch(endPoint);
    const data = await res.json();
    console.log(data)
    updateWeather(data.current)
    updateLocation(data.location)
    loading.style.display = 'block';
    loading.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = searchField.value;
    fetchData(target);
    searchField.value = '';
})