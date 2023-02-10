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
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
    },
  },
  preflight: {
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,700')`,
    body: apply`font-rubik`,
  },
} as Options;
