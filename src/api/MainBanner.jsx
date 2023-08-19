import { useEffect, useState } from "react";
import "./toprated.css";
const MainBanner = () => {
  const [repk, setRepk] = useState([]);

  console.log(repk);
  const apiKey = "f233d19cf846c8b86adc990548d40eef";
  const baseUrl = "https://api.themoviedb.org/3";
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const endPoint = "/movie/upcoming";
  const url = `${baseUrl}${endPoint}?api_key=${apiKey}&page=${randomNumber}`;
  const cutFet = async () => {
    try {
      console.log("fetching Data");
      const response = await fetch(url);
      const res = await response.json();
      // console.log(response);
      console.log(res);
      setRepk(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cutFet();
  }, []);

  return (
    <div className="parenttoprated">
      <div className="lol">
        {repk.results?.map((kk) => (
          <div key={kk.id}>
            <img
              src={`http://image.tmdb.org/t/p/w1280${kk.backdrop_path}`}
              alt=""
              className="thisimgh"
            />
            {/* <h1 className="itemTitle">{item?.title.substring(0, 100)}</h1> */}
            <h1 className="topratedTitle">{kk?.title}</h1>
            <p>{kk.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
