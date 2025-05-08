import express from "express";


const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Pizza Delivery");
});

app.get("/hamburguer", (req, res) => {
    res.send("Hamburger Delivery");
});

app.get("/user/:id", (req, res) => {
    res.json({
        params: req.params,
        query: req.query,
        method: req.method,
        headers: req.headers,
    });
});

app.listen(PORT, () => {
    console.log("Servidor escutando em http://localhost:" + PORT);
});
