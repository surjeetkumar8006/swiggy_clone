import "./../Style/RestaurantInfo.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Re from "../Utils/Restaurant.json";
import RestaurantInfo from "../Components/RestaurantInfo";

const Restaurant = () => {
  const { resId } = useParams();
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const restaurantData = Re.find((item) => item.info.id === resId);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:5000/menu");
        const data = await response.json();

        const recommendedObj = data.find(
          (outerObj) => outerObj.card?.card?.title === "Recommended"
        );

        if (recommendedObj) {
          const items = recommendedObj.card.card.itemCards.map(
            (ic) => ic.card.info
          );
          setRecommendedItems(items);
        }
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (!restaurantData) {
    return <p>Restaurant not found.</p>;
  }

  const {
    name,
    rating,
    totalRatingsString,
    costForTwo,
    cuisines,
    locality,
    availability,
  } = restaurantData.info;

  const isClosed = availability && availability.nextOpenMessage ? true : false;
  const nextOpenTime = availability?.nextOpenMessage || "11:00 AM tomorrow";

  return (
    <div className="restPage">
      <div className="path">
        <span>Home / Noida / {name}</span>
      </div>

      <div className="restContainerfood">
        <div className="restInfo">
          <p className="restName">{name}</p>
          <div className="restaurantService">
            <p>Order Online</p>
            <p>Dineout</p>
          </div>

          <RestaurantInfo
            rating={rating}
            totalRatingsString={totalRatingsString}
            costForTwo={costForTwo}
            cuisines={cuisines}
            locality={locality}
            isClosed={isClosed}
            nextOpenTime={nextOpenTime}
            recommendedItems={recommendedItems}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
