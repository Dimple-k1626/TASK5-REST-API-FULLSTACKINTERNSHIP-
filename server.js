const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskmanager")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/tasks", taskRoutes);

app.get("/", (req,res)=>{
res.send("Advanced Task Manager API Running 🚀");
});

app.listen(5000, ()=>{
console.log("Server running on http://localhost:5000");
});