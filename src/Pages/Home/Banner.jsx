import { useState } from "react";

const api = {
  key:'d8f4c983d940040113adad1849931a1f',
  base:'https://api.openweathermap.org/data/2.5/'
}
const Banner = ({setWeather,search, setSearch}) => {

  

  const searchProcess = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(data => setWeather(data))
  }
    
  return (
    <div>
      <div className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-8">
            Explore our amazing features and services
          </p>

          {/* Search Bar */}
          <div className="flex justify-center items-center mb-8">
            <input
              type="text"
              placeholder="Enter City..."
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded-l-full focus:outline-none text-black"
            />
            <button onClick={searchProcess} className="bg-white text-blue-500 py-2 border border-white px-4 rounded-r-full hover:bg-blue-100 hover:text-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
