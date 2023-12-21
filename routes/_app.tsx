import { PageProps } from "$fresh/server.ts";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

export const ContextState = createContext<State>({
  languageAccepted: "es",
  enableForm: "true",
});

export default function App(pageProps: PageProps) {
  return (
    <ContextState.Provider
      value={{
        languageAccepted: pageProps.state.languageAccepted as string,
        enableForm: pageProps.state.enableForm as string,
      }}
    >
      <pageProps.Component />
    </ContextState.Provider>
  );
}
