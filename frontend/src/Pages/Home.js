import { useEffect, useState } from "react";
import "./../Style/home.css";
import Card from "../Components/Card";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let Fetchdata = async () => {
    try {
      let response = await fetch("http://localhost:5000/restaurants");
      let datas = await response.json();
      setData(datas);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <div className="homePageContainer">
      <h2>Restaurants with online food delivery in Noida</h2>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="cardContainer">
          {data.map((data, i) => {
            console.log(data.info, i);
            return <Card data={data}></Card>;
          })}
          {/* <div className="card">
            <img src={`images/${data[0].info.cloudinaryImageId}.avif`} />
            <div className="car__Data">
              <h3 className="cardResName">{data[0].info.name}</h3>
              <div className="cardResCuisines">
                {data[0].info.cuisines.join(", ")}
              </div>
              <div className="cuisinePrice">{data[0].info.costForTwo}</div>
              <div className="cardResInfo">
                <span className="cardResRating">{data[0].info.avgRating}</span>
                <span className="">3.2 min</span>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={`images/${data[1].info.cloudinaryImageId}.avif`} />
            <div className="car__Data">
              <h3 className="cardResName">{data[1].info.name}</h3>
              <div className="cardResCuisines">
                {data[0].info.cuisines.join(", ")}
              </div>
              <div className="cuisinePrice">{data[1].info.costForTwo}</div>
              <div className="cardResInfo">
                <span className="cardResRating">{data[1].info.avgRating}</span>
                <span className="">3.2 min</span>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={`images/${data[2].info.cloudinaryImageId}.avif`} />
            <div className="car__Data">
              <h3 className="cardResName">{data[2].info.name}</h3>
              <div className="cardResCuisines">
                {data[0].info.cuisines.join(", ")}
              </div>
              <div className="cuisinePrice">{data[2].info.costForTwo}</div>
              <div className="cardResInfo">
                <span className="cardResRating">{data[2].info.avgRating}</span>
                <span className="">3.2 min</span>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Home;
