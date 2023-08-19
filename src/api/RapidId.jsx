import { useState, useEffect } from "react";
import "./RapidId.css";
import MainBanner from "./MainBanner";

const RapidId = () => {
  const [data, setData] = useState([]);

  console.log(data);
  const apiKey = "f233d19cf846c8b86adc990548d40eef";
  const baseUrl = "https://api.themoviedb.org/3";
  const randomNumber = Math.floor(Math.random() * 300) + 1;
  const endPoint = "/movie/popular";
  const url = `${baseUrl}${endPoint}?api_key=${apiKey}&with_genres=12&page=${randomNumber}`;
  const lolFet = async () => {
    try {
      console.log("fetching Data");
      const response = await fetch(url);
      const res = await response.json();
      // console.log(response);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    lolFet();
  }, []);
  // const lol = data.map((hehe, index) => (
  //   <div key={index}>
  //     <img src={hehe.backdrop_path} alt="ok" />
  //   </div>
  // ));
  function cut(stri, number) {
    return stri?.length > number ? stri.substr(0, number - 1) + "...." : stri;
  }
  return (
    <>
      <div className="pert">
        <div className="popularPar">
          <h1 className="pop">popular</h1>
          <div className="divbro">
            {/* {data.map((hehe, index) => (
        <div key={index}>
          <img src={hehe.backdrop_path} alt="ok" />
        </div>
      ))} */}

            {data.results?.map((item) => (
              // console.log(item)
              // <img src={item.backdrop_path} key={item.id} alt="loo" />
              <div key={item.id} className="maindiv">
                <img
                  src={`http://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt=""
                />
                {/* <h1 className="itemTitle">{item?.title.substring(0, 100)}</h1> */}
                <h1 className="itemTitle">{item?.title}</h1>
                <p>{cut(item?.overview, 150)}</p>
                <p>{item.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RapidId;
