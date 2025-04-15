import { useNavigate } from "react-router-dom";
const SearcheData = ({ res }) => {
  const navigate = useNavigate();
  return (
    <div
      className="searchedData"
      key={res.info.id}
      onClick={() => navigate(`/restaurant/${res.info.id}`)}
    >
      <img src={`images/${res?.info.cloudinaryImageId}.avif`} />
      <div>
        <p>{res.info.name}</p>
      </div>
    </div>
  );
};
export default SearcheData;
