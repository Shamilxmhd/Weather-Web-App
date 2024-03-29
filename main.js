getWeatherData = () => {
    placename = display.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placename}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`).then((response) => {
        response.json().then(data => {
            if (!placename) {
                error.innerHTML = "Please Enter a Placename!"
            }
            else {
                places = placename.charAt(0).toUpperCase() + placename.slice(1);
                if (places == data.name) {
                    error.innerHTML = ""

                    result.innerHTML = `
        <div class="flex  flex-col justify-center items-center  text-gray-700">
            <img src="" class="w-60 max-[500px]:w-52" alt="">
            <h1 class="text-8xl max-[500px]:text-7xl"><span>${Math.round(data.main.temp)}</span><sup class="text-5xl">o</sup>c</h1>
            <h1 class="text-xl font-semibold">Feels like <span>${Math.round(data.main.feels_like)}</span><sup class="text-lg">o</sup>c</h1>
            <h1 class="text-6xl max-[500px]:text-4xl mt-5">${data.name}</h1>
        </div>
        <div class="px-7 max-[500px]:px-5 text-gray-700 font-extrabold mt-10 flex justify-between">
            <div class="flex ">
           <h1 class="text-4xl max-[500px]:text-2xl ms-3"><i class="fa-solid fa-water me-1"></i></h1>
            <h1 class="text-4xl max-[500px]:text-2xl ms-3"><span>${data.main.humidity}</span>%</h1>
        </div>
        <div class="flex ">
        <h1 class="text-4xl max-[500px]:text-2xl ms-3"><i class="fa-solid fa-wind"></i></h1>
            <h1 class="text-4xl max-[500px]:text-2xl ms-3"><span>${data.wind.speed}</span> km/h</h1>
        </div>
         </div>
         <div class="flex justify-center font-extrabold text-gray-700 text-xl">
            <div class="w-[330px] max-[500px]:w-[300px] flex justify-between">
            <h1 class="ms-3 max-[500px]:ms-0">Humidity</h1>
            <h1 class="ms-2 ">Wind Speed</h1>
        </div>
        </div>
                    `
                }
                else {
                    error.innerHTML = "No place found!!"
                }
            }
        })
    })
}