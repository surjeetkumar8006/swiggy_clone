const RestaurantInfo = ({
  rating,
  totalRatingsString,
  costForTwo,
  cuisines,
  locality,
  isClosed,
  nextOpenTime,
  recommendedItems = [],
  loading,
}) => {
  return (
    <div className="restaurantInfo">
      <div className="restaurantInfoContainer">
        <div className="primary">
          {isClosed ? (
            <p>
              Uh-oh! Outlet is not accepting orders at the moment. They should
              be back by {nextOpenTime}
            </p>
          ) : (
            <p>Outlet is open. Place your order now!</p>
          )}
        </div>

        <div className="secondary">
          <div className="secondaryInfo">
            <h4>{rating} ({totalRatingsString})</h4>
            <span>•</span>
            <h4>
              ₹
              {typeof costForTwo === "number"
                ? (costForTwo / 100).toFixed(2)
                : "N/A"}{" "}
              for two
            </h4>
          </div>
          <p>{cuisines.join(", ")}</p>
          <div>
            <p>Outlet</p>
            <p>{locality}</p>
          </div>
          <span>{isClosed ? "Closed & not delivering" : "Open for delivery"}</span>
        </div>
      </div>

      <div className="recommendedSection">
        <h2>
          Recommended (
          {loading ? "Loading..." : recommendedItems.length})
        </h2>
        <div className="menuList">
          {recommendedItems.map((item) => (
            <div key={item.id} className="menuItem">
              <div className="menuItem-left">
                <h3 className="menuItem-name">{item.name}</h3>
                {item.defaultPrice && (
                  <p className="menuItem-price">
                    ₹{(item.defaultPrice / 100).toFixed(2)}
                  </p>
                )}
                <p className="menuItem-desc">{item.description}</p>
              </div>
              <div className="menuItem-right">
                <button className="addBtn">Add</button>
                <img
                  src={
                    item.imgName
                      ? `/images/${item.imgName}`
                      : "/images/default.jpg"
                  }
                  alt={item.name}
                  className="menuImg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
