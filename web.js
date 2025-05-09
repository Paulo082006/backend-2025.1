export default  function useWebRoutes(app) {
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
    
    app.get("/portifolio", (req, res) => {
        res.render("portifolio", {nome: "Paulo"});
    });
} 