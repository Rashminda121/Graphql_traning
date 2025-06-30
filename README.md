# 📦 GraphQL Product API

A simple GraphQL API built with Node.js, Express, and Mongoose for managing products and their associated stores.

## 🚀 Features

* Fetch a product by ID
* List all products
* Create new products
* Update existing products
* Delete products
* Stores associated with products
* Soldout status (enum)

---

## 🛠️ Tech Stack

* Node.js
* Express
* GraphQL (graphql, express-graphql)
* Mongoose
* MongoDB

---

## 📂 Project Structure

```
├── schema.js          # GraphQL schema definition
├── resolvers.js       # GraphQL resolvers
├── dbConnectors.js    # MongoDB connection & Mongoose model
├── server.js          # Express server setup
```

---

## 🧬 GraphQL Schema Overview

### Types

```graphql
type Product {
  id: ID
  name: String
  description: String
  price: Float
  inventory: Int
  soldout: Soldout
  stores: [Store]!
}

type Store {
  store: String
}

enum Soldout {
  SOLDOUT
  ONSALE
}
```

### Input Types

```graphql
input StoreInput {
  store: String
}

input ProductInput {
  id: ID
  name: String
  description: String
  price: Float
  inventory: Int
  soldout: Soldout
  stores: [StoreInput]!
}
```

### Queries

```graphql
getProduct(id: ID!): Product
getAllProducts: [Product]
```

### Mutations

```graphql
createProduct(input: ProductInput): Product
updateProduct(input: ProductInput): Product
deleteProduct(id: ID!): String
```

---

## 🧾 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure MongoDB**

   Update the MongoDB connection in `dbConnectors.js` with your Mongo URI.

4. **Run the server**

   ```bash
   npm start
   ```

5. **Test the API**

   Open GraphQL Playground or Postman at:

   ```
   http://localhost:4000/graphql
   ```

---

## 📬 Example Query

```graphql
query {
  getAllProducts {
    id
    name
    price
    soldout
  }
}
```

## 🧪 Example Mutation

```graphql
mutation {
  createProduct(input: {
    name: "Sample Product"
    description: "A great product"
    price: 99.99
    inventory: 10
    soldout: ONSALE
    stores: [{ store: "Main Store" }]
  }) {
    id
    name
  }
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
