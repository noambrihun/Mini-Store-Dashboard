require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors"); 
const mongoose = require("mongoose");
const routes = require("./Routes/routes");
// middleware
app.use(cors());
app.use(express.json());
app.use("/api/products", routes);
const PORT = process.env.PORT || 3000;

// test route
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log("Error", err.message))

app.get("/", (req,res)=>{
  res.send("Code Product API is running")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});