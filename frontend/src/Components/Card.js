import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/restaurant/${data.info.id}`)}
    >
      <img src={`images/${data?.info.cloudinaryImageId}.avif`} />
      <div className="car__Data">
        <h3 className="cardResName">{data?.info.name}</h3>
        <div className="cardResCuisines">{data?.info.cuisines.join(", ")}</div>
        <div className="cuisinePrice">{data?.info.costForTwo}</div>
        <div className="cardResInfo">
          <span className="cardResRating">{data?.info.avgRating}</span>
          <span className="">3.2 min</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
