import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";
// import * as daisyui from "https://cdn.jsdelivr.net/npm/daisyui@2.45.0/dist/full.css";

/*
setup({
  //plugins: daisyui,
  preflight: {
    body: apply`bg-black`,
  },
});
*/

export default {
  selfURL: import.meta.url,
  preflight: {
    //body: apply`bg-black`,
  },
} as Options;
