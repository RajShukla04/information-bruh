import { useState } from "react";
import "./ApiData.css";

const url = import.meta.env.VITE_API_URL;
const ApiData = () => {
  const [res, setRes] = useState([]);
  const fetchBro = async () => {
    try {
      const response = await fetch(url);
      const resp = await response.json();
      setRes(resp);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={fetchBro}>Get Data</button>
      {/* {console.log(res.id)} */}
      <p>{res.value}</p>
      <div className="img">
        <img src={res.url} alt="" />
      </div>
    </div>
  );
};

export default ApiData;
