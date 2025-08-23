# Headless E-commerce Backend

This project is a headless e-commerce backend built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**. It supports product catalog browsing, cart management (guest-first), applying promos, and checkout/order management.

---

## 📂 Project Structure

```

src/
├─ app/
│   ├─ middlewares/
│   └─ modules/
│       ├─ product/
│       └─ checkout/
├─ routes/
├─ app.ts
└─ server.ts

````

## 🌐 Live Backend
https://e-commerce-backend-gamma-ashen.vercel.app

- **modules/product**: Product related logic (controller, route, validation, model)  
- **modules/checkout**: Checkout/order logic (controller, route, validation, model)  
- **middlewares**: Input validation, error handling  
- **routes**: Main API routes  

---

## 🚀 Features

### Catalog
- Products with multiple **variants** (size, color, price, inventory)
- Get all products
- Create, update, delete products
- MongoDB aggregation used for:
  - Lowest & highest variant price per product
  - Total inventory per product

### Cart
- Guest-first cart management
- Add, update, remove items
- Calculate total price

### Promos
- Percent or fixed discount
- Validity window

### Checkout / Orders
- Create order from cart
- Manage orders (get all, update, delete)
- Calculate totals & apply promos

### Validation & Error Handling
- Request validation using **Zod**
- Centralized error shape
- Request logging middleware

---

## 📦 Tech Stack

- **Node.js** (LTS)
- **Express.js** (TypeScript)
- **MongoDB** (Mongoose)
- **Validation**: Zod
- **API Documentation**: OpenAPI 

---

## ⚙️ Installation

```bash
git clone https://github.com/nayeem-miah/e-commarce-backend.git
cd e-commerce-backend
npm install
cp .env.example .env
npm run dev
````

---

## 📝 API Endpoints

### Products

| Method | Route               | Description      |
| ------ | ------------------- | ---------------- |
| POST   | /api/product/create | Create product   |
| GET    | /api/product/       | Get all products |
| PATCH  | /api/product/\:id   | Update product   |
| DELETE | /api/product/\:id   | Delete product   |

### Checkout / Orders

| Method | Route              | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | /api/checkout/     | Create order from cart |
| GET    | /api/checkout/     | Get all orders         |
| PATCH  | /api/checkout/\:id | Update order           |
| DELETE | /api/checkout/\:id | Delete order           |

---

## 📊 MongoDB Aggregation Pipeline Use Cases

* Aggregate **variants** data per product
* Calculate **lowest & highest price**
* Calculate **total inventory**

---
