#  Restaurant Management Web App

This project is a full-stack restaurant management system built using **MERN stack** (MongoDB, Express.js, React.js, Node.js). It supports complete **CRUD operations** for restaurants, menus, help section, and users — all with frontend integration using CORS.

---

## Restaurant Cards (Dynamic & Editable)

![Restaurant Cards](https://github.com/user-attachments/assets/5de8c51f-06cf-4ec0-8212-be36fb3845db)

###   Full CRUD Operations (Restaurants)

You can perform complete **CRUD (Create, Read, Update, Delete)** operations on each restaurant card:

- **Create:** Add new restaurants via a form.
- **Read:** View all restaurants dynamically.
- **Update:** Edit name, price, type, etc.
- **Delete:** Remove any restaurant entry easily.

---

##  Menu Items – Dynamic & CRUD-enabled

![Menu Items](https://github.com/user-attachments/assets/e4f10a47-0d72-4042-bc55-915c33ef798d)

###   Full CRUD Operations (Menu)

You can perform full CRUD operations on the menu items under each restaurant:

- **Create:** Add new menu items linked to any restaurant.
- **Read:** View items using route like `/menu/:id`.
- **Update:** Edit name, price, description, or image.
- **Delete:** Remove any dish from the menu.

---

##   Help & Support Section

![Help & Support](https://github.com/user-attachments/assets/7e942cd3-2fec-4b12-a26a-206b8f08f263)

###   Full CRUD Functionality (Help Section)

We have implemented full CRUD for help data saved in a `help.json` file:

- **Create:** Add a new FAQ item from UI/backend.
- **Read:** Display FAQs based on categories like *Partner Onboarding*.
- **Update:** Edit questions or answers via modal/form.
- **Delete:** Remove any FAQ easily.

---


![User CRUD](https://github.com/user-attachments/assets/e72a3a4c-aed3-4cf9-8c20-6f9fdac98768)

###  Full CRUD Operations (Users)

Manage users with full functionality:

- **Create User**
- **Read User**
- **Update User**
- **Delete User**

User details include username, email, password (hashed), and role (admin/intern/developer/etc).

---

##  Frontend Integration using CORS

To connect the **frontend (React)** with **backend (Node.js/Express)** running on different ports during development (e.g., `localhost:3000` and `localhost:5000`), CORS (Cross-Origin Resource Sharing) must be enabled in the backend.


