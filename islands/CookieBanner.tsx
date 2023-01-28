import { css, tw } from "twind/css";
import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

export default function CookieBanner(): JSX.Element {
  const alreadyAccepted = 0;
  if (true) {
    const [accepted, setValue] = useState(alreadyAccepted);

    const accept = () => {
      setValue(1);
      console.log("accepted");
    };
    return (
      <>
        <div
          className={tw(
            `fixed text-xs sm:text-sm text-black bottom-0 left-0 w-full bg-gray-200 ${
              accepted === 1 ? "hidden" : ""
            }`,
          )}
        >
          <div
            className={tw("flex flex-col gap-4 p-5 sm:(flex-row gap-8 p-10)")}
          >
            <p className={tw("")}>
              Este portal web únicamente utiliza cookies propias con finalidad
              técnica, no recaba ni cede datos de carácter personal de los
              usuarios sin su conocimiento.{" "}
              <br />Se ofrece más información en nuestra&nbsp;
              <a href="#" className={tw("underline hover:text-gray-500")}>
                política de cookies.
              </a>
            </p>
            <p className={tw("text-center sm:text-right")}>
              <button
                className={tw(
                  "border-2 border-black inline-display py-4 px-8 hover:(text-white bg-black)",
                )}
                onClick={accept}
              >
                Aceptar
              </button>
            </p>
          </div>
        </div>
      </>
    );
  }

  return <div></div>;
}
