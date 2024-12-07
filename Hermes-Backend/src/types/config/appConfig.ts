import { z } from "zod";
import { Error } from "../common/error";



type APP_CONFIG_CODES = "INTERNAL_ERROR"

export const appConfigScheme = z.object({
  primary_colour: z.string()
});


export type AppConfig = z.infer<typeof appConfigScheme>

export type AppConfigRequest = z.infer<typeof appConfigScheme>

export type AppConfigResponse = Error<APP_CONFIG_CODES> | {
  status: "SUCCESS",
  config: AppConfig,
}

type UPDATE_APP_CONFIG_CODES = "INTERNAL_ERROR"

export const updateAppConfigScheme = appConfigScheme.partial();

export type UpdateAppConfig = z.infer <typeof updateAppConfigScheme>;

export type UpdateAppConfigRequest = z.infer<typeof updateAppConfigScheme>

export type UpdateAppConfigResponse = Error<UPDATE_APP_CONFIG_CODES> | {
  status: "SUCCESS",
}
