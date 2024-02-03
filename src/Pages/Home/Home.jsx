import { FaTrash, FaUserPlus } from "react-icons/fa";
import Banner from "./Banner";
import { useState } from "react";

const Home = () => {

    const [search, setSearch] = useState('');   

  return (
    <div>
        <Banner setSearch={setSearch}/>
      <h2 className="">Home</h2>
    </div>
  );
};

export default Home;
