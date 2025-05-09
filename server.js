import express from "express";
import  useWebRoutes  from "./web.js"; 


const app = express();
const PORT = 3000;

useWebRoutes(app);

// Configuraçãpo do EJS
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
    console.log("Servidor escutando em http://localhost:" + PORT);
});
