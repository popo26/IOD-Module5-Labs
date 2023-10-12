const express = require("express");
const app = express();
const port = 3000;
const calculatorRoutes = require("./routes/calculatorRoute");
const swaggerUi = require("swagger-ui-express");

swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Port listening at http:localhost:${port}`);
});
