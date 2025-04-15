const RestaurantInfo = () => {
  return (
    <div className="restaurantInfo">
      <div className="restaurantInfoContainer">
        <div className="primary">
          <p>
            Uh-oh! Outlet is not accepting orders at the moment. They should be
            back by 11:00 AM tomorrow
          </p>
        </div>
        <div className="secondary">
          <div className="secondaryInfo">
            <h4>3.6 (100+ ratings)</h4> <span>•</span> <h4>₹99 for two</h4>
          </div>
          <p>South Indian, Chinese</p>
          <div>
            <p>Outlet</p>
            <p>Crossing Republic</p>
          </div>
          <span>Closed & not delivering</span>
        </div>
      </div>
    </div>
  );
};
export default RestaurantInfo;
