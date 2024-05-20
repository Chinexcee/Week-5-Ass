const products = require("./products")

const productHandle = async(req, res) => {
  return res.status(201).json({message:'my name is Chuku chuku'})
 
}


// get request
const handleProductRequest = async (req, res) =>{
 return  res.status(200).json (`This is the pad avaialable ${products}`)
}


// post request
const handleProductPost =  async (req, res) =>{
  console.log(req.body);
  return  res.status(200).json ({message: "This is the pad"})
 }

 const newProductAdded = async (req, res)=>{
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.json(newProduct);
}

// Destructuring
const {id, name, price } = req.body
if (!name){
  return res.status(400).json({message:"Please add name"})

  if (!id){
    return res.status(400).json({message: "Add your id"})
  }
  if (!price){
    return res.status(402).json({message: "Validate price"})
  }

  items.push({id, name, price})
  res.status(200).json("Successful", items)
}




module.exports = {
handleProductRequest,
handleProductPost,
productHandle, 
newProductAdded}