import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use("/game", express.static("game"))
app.set("view engine", "ejs")

app.get("/", (req: Request, res: Response): void => {
    res.render("index")
})

app.listen(5000)