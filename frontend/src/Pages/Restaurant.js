import "./../Style/restaurant.css";
import { useParams } from "react-router-dom";
import Re from "./../Utils/Restaurant.json";

import RestaurantInfo from "../Components/RestaurantInfo";

const Restaurant = () => {
  const { resId } = useParams();
  console.log(resId);
  const findObj = () => {
    return Re.find((item) => item.info.id === resId);
  };
  const result = findObj();
  const text = result.info.name;

  return (
    <div className="restPage">
      <div className="path">
        <span>Home / Noida / {text}</span>
      </div>
      <div className="restContainerfood">
        <div className="restInfo">
          <p> {text}</p>
          <div className="restaurantService">
            <p>Order Online</p>
            <p>Dineout</p>
          </div>
          <RestaurantInfo />
        </div>
        <div className="restcuisineCont"></div>
      </div>
    </div>
  );
};
export default Restaurant;
