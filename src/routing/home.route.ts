import { Router, Request, Response, NextFunction } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      message: "This is a pratice of backend 😎😉😎💖💖😢",
    });
  } catch (err) {
    console.log(err);
  }
});
export default routes;
