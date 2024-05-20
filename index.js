const express = require("express");
const dotenv = require("dotenv")
const {productHandle, handleProductRequest, handleProductPost, newProductAdded} = require("./ctrl")



dotenv.config()
const app = express();


// Middleware: a func thst run between where info is sent to the backend where it is received
app.use(express.json())

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", productHandle);

app.get("/items", handleProductRequest)

app.post("/post-pro", handleProductPost)
app.post("/new-products", newProductAdded)
