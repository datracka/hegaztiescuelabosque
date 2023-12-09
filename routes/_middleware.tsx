import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { load } from "$std/dotenv/mod.ts";

interface State {
  languageAccepted: string;
  enableForms: string;
}

const defaultLanguage = "es";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const env = await load();
  ctx.state = {
    languageAccepted: req.headers.get("Accept-Language") || defaultLanguage,
    enableForms: env["ENABLE_FORMS"],
  };
  const resp = await ctx.next();
  return resp;
}
