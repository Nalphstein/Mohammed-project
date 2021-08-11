import React, { useState } from 'react';

//import lucious from '../../../Images/illustration-features-tab-1.svg';
//import cold from '../../../Images/cold-bg.jpg';


const Api= {
  key: "bb7bc3dce063125ff551f02a1de85a51",
  base:"http://api.openweathermap.org/data/2.5/"

}


export default function Intro() {
  
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const search = e => {

    if (e) {
      e.preventDefault()
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${Api.key}`, requestOptions)
    // .then(res => {res.json();
    // console.log(res)})
    // .then(result => {
    //   setWeather(result);
    //   setQuery('');
    //   console.log(result);});
    .then(response => response.json())
    .then(result => setWeather(result))
    .catch(error => console.log('error', error));
    

   
  }

  const temperature = (degree) => {
    return (Math.round(degree) - 273)
  }
  
  const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day= days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];

  let year = d.getFullYear();


  return `${day} ${date} ${month} ${year}`
  //this is a template string. Template literals can contain placeholders. 
  //These are indicated by the dollar sign and curly braces (${expression}).
  //The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
}

console.log("INPUT QUERY", query)
console.log("INPUT WEATHER", weather)
console.log("final weather", weather.weather)

const apples ="relative bottom-30 left-10 sm:h-screen md:h-full sm:w-90 md:h-screen transition-ease-out duration-300"
const coldWeather = `bg-cover bg-bottom bg-no-repeat bg-cold-pattern ${apples}`
const hotWeather = `bg-cover bg-bottom bg-no-repeat bg-warm-pattern ${apples}`

    return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Features</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div>
            <div className="my-20">
              <div className="hidden md:flex md:ml-20 md:pr-36 md:space-x-40 relative justify-center items-center border-b-2 hover:rounded-sm">
                <h2 className="mt-3 text-3xl leading-6 font-medium tracking-tight text-gray-500 sm:text-2xl hover: border-b-2 hover: pb-6 hover:border-red-500">Simple Bookmarking</h2>
                <h2 className="mt-3 text-3xl leading-6 font-medium tracking-tight text-gray-500 sm:text-2xl hover: border-b-2 hover: pb-6 hover:border-red-500">Speedy Searching</h2>
                <h2 className="mt-3 text-3xl leading-6 font-medium tracking-tight text-gray-500 sm:text-2xl hover: border-b-2 hover: pb-6 hover:border-red-500">Easy Sharing</h2>   
              </div>
            </div>
          </div>
        </div>

        <div className="bg-fields bg-screen w-full h-full">
        <main className="grid lg:grid-cols-2 gap-60">
          
        <div className="relative h-full w-full md:h-full w-90">
            
            
            
            
            <div>
            {(typeof weather.main != "undefined") ? (
              <>
              
                        <div className={temperature(weather.main.temp) < 22 ? coldWeather : hotWeather }>

                <div className="location-box text-md font-semibold text-center">
                  <div className="my-10 location text-2xl text-white font-extrabold">{weather?.name},{weather.sys.country}</div>
                  <div className="date italic">{dateBuilder(new Date())}</div>
                  
                </div>
               
                <div className="round-lg my-10 weather-box h-2/4 w-full  font-semibold text-center">
                 
                  <div className="temp text-3xl">{temperature(weather.main.temp)}°c</div>
                  <div className="weather my-10">{weather.weather[0].main}</div> 
               
                </div>
                </div>
              </>
                     ) : ('')}
                  </div>
            
              
        
          
                       
        </div>
        <div className="lg:text-left lg:text-left">
          <h1 className=" mt-20 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-100xl sm:text-100xl">
            <span className="block xl:inline md:flex-shrink-5">
              Weather in one click
            </span>
          </h1>
          
          <div className="search-box ">
          <p className="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-100xl sm:mx-auto md:flex-shrink-0 md:text-left lg:mx-0">
          <form>
            <input type="text" 
            className="search-bar shadow-6px" 
            placeholder="Search..."
            onChange={e => setQuery (e.target.value)}
            value ={query}
            // onKeyPress={search}/>
            />
          </form>
          </p>
          </div>

         

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md-5 shadow">
              <button type="button" className="w-full flex items-center justify-center btn btn-indigo hover:bg-indigo-700 md:py-4 md:text-lg md:px-3"
              onClick={search}>
                More Info
              </button>
            </div>
          </div>
        </div>
        
          
        </main>
        </div>
      </div>
        </div>
        
    )
}
