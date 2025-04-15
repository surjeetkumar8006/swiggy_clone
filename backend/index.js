

// const dataPath = "../frontend/src/Utils/Restaurant.json";
// const menuPath = "../frontend/src/Utils/Menu.json";

// let data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
// let Menudata = JSON.parse(fs.readFileSync(menuPath, "utf-8"));

// app.get("/restaurants", (req, res) => {
//   res.json(data);
// });

// app.get("/restaurants/:id", (req, res) => {
//   const restaurantId = req.params.id;
//   const restaurant = data.find((item) => item.info.id === restaurantId);
//   if (!restaurant) {
//     return res.status(404).json({ error: "Restaurant not found" });
//   }
//   res.json(restaurant);
// });

// app.post("/restaurants", (req, res) => {
//   const newRestaurant = req.body;
//   let lastId = 100;
//   if (data.length > 0) {
//     const lastRestaurant = data[data.length - 1];
//     lastId = parseInt(lastRestaurant.info.id) || 100;
//   }
//   newRestaurant.id = (lastId + 1).toString();
//   data.push({ info: newRestaurant });
//   fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
//   res.status(201).json({
//     message: "Restaurant added successfully",
//     data: newRestaurant,
//   });
// });

// app.patch("/restaurants/:id", (req, res) => {
//   const restaurantId = req.params.id;
//   const updateData = req.body;
//   const index = data.findIndex((item) => item.info.id === restaurantId);
//   if (index === -1)
//     return res.status(404).json({ error: "Restaurant not found" });
//   data[index].info = { ...data[index].info, ...updateData };
//   fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
//   res.json({ message: "Restaurant updated", data: data[index].info });
// });

// app.delete("/restaurants/:id", (req, res) => {
//   const restaurantId = req.params.id;
//   const newData = data.filter((item) => item.info.id !== restaurantId);
//   if (newData.length === data.length) {
//     return res.status(404).json({ error: "Restaurant not found" });
//   }
//   data = newData;
//   fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
//   res.json({ message: "Restaurant deleted" });
// });

// // ----------- MENU ROUTES -----------

// app.get("/menu", (req, res) => {
//   res.json(Menudata);
// });

// app.get("/menu/:id", (req, res) => {
//   const menuId = req.params.id;
//   // Flatten itemCards and find by ID
//   const menuItem = Menudata.flatMap(
//     (block) => block?.card?.card?.itemCards || [] // Flatten the array
//   ).find((item) => item?.card?.info?.id === menuId); // Find the item by ID

//   if (!menuItem) {
//     return res.status(404).json({ error: "Menu item not found" });
//   }
//   res.json(menuItem);
// });

// app.post("/menu", (req, res) => {
//   const newItem = req.body;
//   let lastId = 200;
//   if (Menudata.length > 0) {
//     const lastItem = Menudata[Menudata.length - 1];
//     lastId = parseInt(lastItem.id) || 200;
//   }
//   newItem.id = (lastId + 1).toString();
//   Menudata.push(newItem);
//   fs.writeFileSync(menuPath, JSON.stringify(Menudata, null, 2));
//   res.status(201).json({
//     message: "Menu item added successfully",
//     data: newItem,
//   });
// });

// app.patch("/menu/:id", (req, res) => {
//   const menuId = req.params.id;
//   const updateData = req.body;

//   const menuItem = Menudata.flatMap(
//     (block) => block?.card?.card?.itemCards || []
//   ).find((item) => item?.card?.info?.id === menuId);

//   if (!menuItem) {
//     return res.status(404).json({ error: "Menu item not found" });
//   }

//   menuItem.card.info = { ...menuItem.card.info, ...updateData };

//   fs.writeFileSync(menuPath, JSON.stringify(Menudata, null, 2));
//   res.json({ message: "Menu item updated", data: menuItem });
// });
// app.delete("/menu/:id", (req, res) => {
//   const menuId = req.params.id;

//   const block = Menudata.find((block) =>
//     block?.card?.card?.itemCards.some((item) => item?.card?.info?.id === menuId)
//   );

//   if (!block) {
//     return res.status(404).json({ error: "Menu item not found" });
//   }

//   block.card.card.itemCards = block.card.card.itemCards.filter(
//     (item) => item?.card?.info?.id !== menuId
//   );

//   fs.writeFileSync(menuPath, JSON.stringify(Menudata, null, 2));

//   res.json({ message: "Menu item deleted" });
// });


const express = require("express");
const cors = require("cors");
const restaurantRoutes = require("./Routers/restaurantRoutes.js");
const menuRoutes = require("./Routers/menuRoutes.js");
const helpRoutes = require("./Routers/helpRoutes.js"); 
const userRoutes = require("./Routers/userRoutes.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/restaurants", restaurantRoutes);  
app.use("/menu", menuRoutes);
app.use("/help", helpRoutes);
app.use("/user", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
