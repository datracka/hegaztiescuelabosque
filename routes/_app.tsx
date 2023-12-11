import { PageProps } from "$fresh/server.ts";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

export const ContextState = createContext<State>({
  languageAccepted: "es",
  enableForms: "true",
});

export default function App(pageProps: PageProps) {
  return (
    <ContextState.Provider value={{
      languageAccepted: pageProps.state.languageAccepted as string,
      enableForms: pageProps.state.enableForms as string,
    }}>
      <pageProps.Component />
    </ContextState.Provider>
  );
}
