import express, { Request, Response } from "express";
import { connectdb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
import userRouter from "./router/user.router";
import foodOrderRouter from "./router/foodOrder.router";

const app = express();
app.use(express.json());
const port = 4200;

app.use("/category", foodCategoryRouter);

app.use("/food", foodRouter);

app.use("/user", userRouter);

app.use("/order", foodOrderRouter);

app.get(`/`, (req: Request, res: Response) => {
  res.send("Hello from food delivery");
});

app.listen(port, async () => {
  await connectdb();
  console.log(`Example app Listening on port http://localhost:4200`);
});
