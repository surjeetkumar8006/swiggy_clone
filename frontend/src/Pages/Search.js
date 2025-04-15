import { useState, useEffect } from "react";
import "./../Style/search.css";
import Resturant from "./../Utils/Restaurant.json";
import SearcheData from "../Components/SearcheData";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsInputEmpty(inputValue === "");
      if (inputValue !== "") {
        const filterd = Resturant.filter((res) => {
          return res?.info?.name
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        });

        setFilteredRestaurants(filterd);
      } else {
        setFilteredRestaurants([]);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [inputValue]);

  console.log(filteredRestaurants);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="searchField"
          placeholder="Search Restaurants and Food"
        />
      </div>
      {!isInputEmpty && filteredRestaurants.length === 0 ? (
        <div className="searchNotFound">
          <p>This restaurant is not listed</p>
          <p>Please enter some Other Restaurant Name</p>
        </div>
      ) : (
        <div className="searched">
          {filteredRestaurants.map((res) => {
            return <SearcheData res={res} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
