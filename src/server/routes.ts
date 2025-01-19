import pingRoutes from "@/modules/ping/routes";
import { app } from "./app";

export const routes = async () => {
  app.register(pingRoutes);
};
