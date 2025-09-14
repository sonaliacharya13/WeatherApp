async function getWeather(){
    let city=document.getElementById("city").value;
    const apiKey="4c536293df463317425eba1f0517e662";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=matrics`;
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    if(data.code==="404"){
        document.getElementById("result").innerHTML="City not found!";
    }
    else{
        document.getElementById("result").innerHTML=`<h3>${data.name},${data.sys.country}</h3>
        <p> 🌡️Temprature:${data.main.temp}C</p>
        <p> ☁️Weather:${data.weather[0].description}</p>
        <p> 💧Humidity:${data.main.humidity}% </p>
        <p> 🍃Wind Speed:${data.wind.speed}m/s</p>`;

    }
    if(data.weather[0].main==="Clear"){
        document.body.style.background="linear-gradient(to right,#fbc2eb,#a6c1ee";
    }
    else if(data.weather[0].main==="Clouds"){
        document.body.style.background="linear-gradient(to left,#bdc3c7,#2c3e50)";
    }
    else if(data.weather[0].main==="Rain"){
        document.body.style.background="linear-gradient(to right,#00c6ff,#0072ff)";
    }
}