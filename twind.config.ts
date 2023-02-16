import { Options } from "$fresh/plugins/twind.ts";
import { apply, tw } from "twind";
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
    body: apply`font-rubik text-[rgba(29,29,29,.7)]`,
    p: apply`text-lg font-light tracking-[.06em] leading-[1.8em]`,
  },
  plugins: {
    "hegazti-h1":
      `text-[32px] sm:(text-[80px] text-center) font-light tracking-[.01em] leading-[1.4em] normal-case`,
    "hegazti-h2":
      `text-[24px] sm:text-[40px] font-normal tracking-[.02em] leading-[1.2em] normal-case not-italic`,
    "hegazti-h3":
      `text-[20px] sm:text-[24px] font-light tracking-[.035px] leading-[1.4em] uppercase`,
    "hegazti-h2-footer": "hegazti-h2",
  },
} as Options;
