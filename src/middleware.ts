import { sequence } from "astro:middleware";
import { redirectWhenInMaintenanceMode } from "./middlewares/maintenance";

export const onRequest = sequence(redirectWhenInMaintenanceMode);
