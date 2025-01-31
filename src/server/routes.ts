import { app } from "./app";

import pingRoutes from "@/modules/ping/ping-routes";
import psychologistRoutes from "@/modules/psychologist/psychologist-routes";

export const routes = async () => {
  app.register(pingRoutes);
  app.register(psychologistRoutes);
};
