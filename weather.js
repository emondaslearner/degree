let names = document.getElementById('name');
let degrees = document.getElementById('degree');
let statusLike = document.querySelector('.lead');
document.getElementById("submit").addEventListener('click',function(){
    event.preventDefault();
    let input = document.getElementById('night').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=040274b883535aad4a125eecbebdc808')
    .then(res => res.json())
    .then(pon => {
        const name = pon.name;
        const degree = Math.round(pon.main.feels_like - 273.15);
        const status = pon.weather[0].main;
        names.innerHTML = name;
        degrees.innerHTML = degree
        statusLike.innerHTML = status;
    })
})

