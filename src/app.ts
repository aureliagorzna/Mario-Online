import express, { Application, Request, Response } from 'express'
require("dotenv").config()

const app: Application = express()

app.use("/game", express.static("game"))
app.set("view engine", "ejs")

app.get("/", (req: Request, res: Response): void => {
    res.render("index")
})

app.listen(process.env.PORT || 5000)