import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
/*app.get("/", (req, res) => {
    res.send("my api ")
})

app.listen(9002, () => {
    console.log("BE Started at port 9002")

})*/
app.post("/login", (req, res) => {
    res.send("my api login")
})

app.post("/register", (req, res) => {
   console.log(req.body)
})

app.listen(9002, () => {
    console.log("BE Started at port 9002")

})
