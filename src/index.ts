import "./lib/db";
import express from "express";
import routes from "./routes/routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes)
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.listen(port, () => {
  console.log(`Server started in port http://localhost:${port}`);
});
