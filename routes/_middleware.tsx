import { FreshContext } from "$fresh/server.ts";
import { load } from "$std/dotenv/mod.ts";

const defaultLanguage = "es";

export async function handler(
  req: Request,
  ctx: FreshContext<State, Data>,
) {
  const env = await load();
  ctx.data = {
    languageAccepted: req.headers.get("Accept-Language") || defaultLanguage,
    enableForms: env["ENABLE_FORMS"],
  };
  const resp = await ctx.next();
  return resp;
}
