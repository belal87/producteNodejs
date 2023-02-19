const express = require("express");
const app = express();
const port = 3100;

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 not found",
  });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
