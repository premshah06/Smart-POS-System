# Smart POS System  

## Overview  
The **Smart POS System** is a robust Point-of-Sale (POS) application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It enables businesses to manage transactions, inventory, and users efficiently with a user-friendly interface and scalable backend.  

## Features  
✅ **User Authentication** – Register and log in securely.  
✅ **Inventory Management** – Add, edit, and delete items.  
✅ **Billing System** – Generate and manage customer bills.  
✅ **Payment Processing** – Track transactions with multiple payment modes.  
✅ **Responsive API** – RESTful APIs for seamless integration.  

## Tech Stack  
- **Frontend**: React.js (not included in the provided structure)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose ORM  
- **Middleware**: Body-parser, CORS, Morgan  
- **Environment**: Dotenv for configuration  

## Project Structure  
```
premshah06-smart-pos-system/
├── controllers/      # Business logic for bills, items, and users  
├── models/          # MongoDB schemas for items, bills, and users  
├── routes/          # Express routes for handling API requests  
├── config/          # Database connection configuration (not included but recommended)  
├── server.js        # Main backend server  
├── seeder.js        # Script for seeding database data  
├── package.json     # Project dependencies and scripts  
└── README.md        # Project documentation  
```

## Installation  

### Prerequisites  
Ensure you have **Node.js** and **MongoDB** installed.  

### Steps  
1️⃣ Clone the repository  
```bash
git clone https://github.com/your-username/smart-pos-system.git
cd smart-pos-system
```  
2️⃣ Install dependencies  
```bash
npm install
```  
3️⃣ Create a `.env` file for environment variables  
```
MONGO_URI=your_mongodb_connection_string  
PORT=8080  
```  
4️⃣ Seed the database with initial data (optional)  
```bash
npm run seed
```  
5️⃣ Start the server  
```bash
npm run server
```  

## API Endpoints  

### **Users**  
- **POST** `/api/users/register` – Register a new user  
- **POST** `/api/users/login` – Authenticate user  

### **Items**  
- **GET** `/api/items/get-item` – Retrieve all items  
- **POST** `/api/items/add-item` – Add a new item  
- **PUT** `/api/items/edit-item` – Update an item  
- **POST** `/api/items/delete-item` – Delete an item  

### **Bills**  
- **POST** `/api/bills/add-bills` – Create a new bill  
- **GET** `/api/bills/get-bills` – Retrieve all bills  

## Contributing  
Feel free to fork this repository and submit pull requests with enhancements or bug fixes.  
