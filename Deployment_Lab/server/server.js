const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("client"))

let {getHTML, getCSS, getJS} = require("./controller")

app.get("/", getHTML)
app.get("/css", getCSS)
app.get("/js", getJS)


app.listen(4000, console.log("Server running on 4000"))