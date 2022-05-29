const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("game"))

app.get("/", (req, res) => {
    const options = {
        root: path.join(__dirname)
    }
    res.sendFile("./game/index.html", options)
})

app.listen(process.env.PORT || 5100)