import { useState } from "react";

const api = {
  key:'d8f4c983d940040113adad1849931a1f',
  base:'https://api.openweathermap.org/data/2.5/'
}
// {setWeather,search, setSearch}
const Banner = () => {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false)
  

  const searchProcess = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(data => setWeather(data))
    setOpen(true);
  }
    
  return (
    <div className="bg-blue-500 h-full lg:flex px-5 items-center justify-around">
      <div className=" text-white py-8">
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
      <div>
      {open == true ? (
        <div className="text-white pb-10 lg:pb-0">
          <h2 className="text-3xl text-center">
            Location: <span className="font-bold">{weather?.name}</span>
          </h2>
          <h2 className="text-3xl text-center ">
            Current Weather: <span className="font-bold">{weather?.main?.temp} &deg;C</span>
          </h2>
          {weather?.weather?.map((item, index) => (
            <h2 key={index} className="text-center text-3xl">
              Weather: <span className="font-bold">{item.description}</span>
            </h2>
          ))}
        </div>
      ) : (
        <></>
      )}
      </div>
    </div>
  );
};

export default Banner;
