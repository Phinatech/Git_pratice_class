import { Router } from "express";
import praticeHomeRoutes from "../routing/home.route";

const routes = Router();

routes.get("/", praticeHomeRoutes);

export default routes;
