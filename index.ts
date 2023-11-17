import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response): Promise<void> => {
  res.json({ message: "Hello world!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
