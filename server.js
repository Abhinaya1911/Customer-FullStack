const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get("/", (req,res) => {
    res.send("Express is here");
})

app.post("/create",(req,res) => {
    Post.create({
        customerName : req.body.customerName,
        customerNumber : req.body.customerNumber,
        city : req.body.city,
        state : req.body.state,
        pincode : req.body.pincode
    }).then(doc => console.log(doc))
    .catch(err => console.log(err))
})

app.get("/posts", (req,res) => {
    Post.find()
        .then((item) => res.json(item))
        .catch(err => console.log(err))
})

app.delete("/delete/:id", (req,res) => {
    Post.findByIdAndDelete({_id : req.params.id})
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

app.delete("/deleteById/:id", (req, res) => {
    const customerNumber = req.params.id;
  
    Post.findOneAndDelete({ customerNumber })
      .then((result) => {
        if (result) {
          res.json({ message: "Deleted successfully" });
        } else {
          res.status(404).json({ message: "Document not found" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
  

app.put("/update/:id", (req,res) => {
    Post.findByIdAndUpdate({_id: req.params.id},{
        customerName : req.body.customerName,
        customerNumber : req.body.customerNumber,
        city : req.body.city,
        state : req.body.state,
        pincode : req.body.pincode
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

app.get("/search/:id", (req,res) => {
    const searchId = req.params.id;
    Post.findOne({customerNumber : searchId})
    .then((post) => {
        if(!post){
            res.status(404).json({message : "Not found"})
        }else {
            res.json(post)
        }
    })
    .catch((error) => {
        console.log(error)
    })
})

app.listen(3001, () => {
    console.log("App running in port 3001")
})

mongoose.connect("mongodb+srv://abhinaya:abhiadhi@cluster0.qeq2ubs.mongodb.net/Customerss")
.then(()=>{
    console.log("Connected to dp")
})
.catch((err) => console.log(err))

const customerSchema = mongoose.Schema({
    customerName : String,
    customerNumber : {
        type: Number,
        unique : true,
        required : true
    },
    city : String,
    state : String,
    pincode : {
        type : Number,
        required : true,
        maxlength : 6,
        minlength : 6,
    },
})

const Post = mongoose.model("Post", customerSchema)