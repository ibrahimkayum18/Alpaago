import Banner from "./Banner";
import NavBar from "../../NavBar/NavBar";
import Lottie from "lottie-react";
import boy from './Boy.json'

const Home = () => {


  return (
    <div>
      <NavBar />
      {/* setWeather={setWeather} search={search} setSearch={setSearch} */}
      <Banner />
      <div className="w-3/4 mx-auto">
        <Lottie animationData={boy}/>
      </div>
    </div>
  );
};

export default Home;
