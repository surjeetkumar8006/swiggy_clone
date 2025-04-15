const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const data = JSON.parse(fs.readFileSync("../frontend/src/Utils/Restaurant.json", "utf-8"));
const Menudata = JSON.parse(fs.readFileSync("../frontend/src/Utils/Menu.json", "utf-8"));

app.get("/restaurants", (req, res) => {
    res.json(data);
});
app.get("/menu", (req, res) => {
    res.json(Menudata);
});
app.post("/restaurants", (req, res) => {

  const newRestaurant = req.body;

  let lastId = 100;
  if (data.length > 0) {
    const lastRestaurant = data[data.length - 1];
    lastId = parseInt(lastRestaurant.info.id) || 100;
  }
  newRestaurant.id = (lastId + 1).toString();

  data.push({ info: newRestaurant });

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.status(201).json({
    message: "Restaurant added successfully",
    data: newRestaurant,
  });
});

app.get("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;

  const restaurant = data.find((item) => item.info.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found" });
  }

  res.json(restaurant);
});

app.patch("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;
  const updateData = req.body;

  const index = data.findIndex((item) => item.info.id === restaurantId);
  if (index === -1)
    return res.status(404).json({ error: "Restaurant not found" });

  data[index].info = { ...data[index].info, ...updateData };

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.json({ message: "Restaurant updated", data: data[index].info });
});

app.delete("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;

  const newData = data.filter((item) => item.info.id !== restaurantId);

  if (newData.length === data.length) {
    return res.status(404).json({ error: "Restaurant not found" });
  }

  fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2));
  res.json({ message: "Restaurant deleted" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

