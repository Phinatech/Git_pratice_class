import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { AppErrors, HttpCode } from "./Utils/AppError";
import { errorHandlings } from "./Middlewares";
import routes from "./apis/apis";

export const appConfigurate = async (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    //routes
    .use("/pratice", routes)

    //Checking for all routes
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppErrors({
          message: `this routes ${req.originalUrl} does not exist`,
          httpCode: HttpCode.NOT_FOUND,
        })
      );
    })

    .use(errorHandlings);
};
