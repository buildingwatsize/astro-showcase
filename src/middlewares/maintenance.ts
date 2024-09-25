import { MAINTENANCE_PATH } from "@/lib/constants";
import { defineMiddleware } from "astro/middleware";

const isMaintenanceMode = Boolean(import.meta.env.MAINTENANCE_MESSAGE);

export const redirectWhenInMaintenanceMode = defineMiddleware(
  async (context, next) => {
    console.log({ isMaintenanceMode });
    if (isMaintenanceMode && context.url.pathname !== MAINTENANCE_PATH) {
      return context.redirect(MAINTENANCE_PATH);
    }
    return await next();
  },
);
