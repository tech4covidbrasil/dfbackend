const express = require("express");

const app = express()

app.use(express.json())

app.use("/dfb", (req, res) => {
    res.status(200).json({
        msg: "Doar Faz Bem"
    })
})

app.listen(3330, () => {
    console.log("Porta 3330")
})