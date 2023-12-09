import { FreshContext } from "$fresh/server.ts";
import { load } from "$std/dotenv/mod.ts";

// not here!
const defaultLanguage = "es";

export async function handler(
  req: Request,
  ctx: FreshContext<State, Data>,
) {
  const env = await load();
  ctx.state = {
    languageAccepted: req.headers.get("Accept-Language") || defaultLanguage,
    enableForms: env["ENABLE_FORMS"],
  };
  return await ctx.next();
}
