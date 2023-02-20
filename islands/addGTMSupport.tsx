import { useEffect } from "preact/hooks";
import { createContext } from "preact";

const initialState = {};

const GTMContext = createContext(initialState);

const setupGTM = (params) => {
  const getDataLayerScript = (): HTMLElement => {
    const dataLayerScript = document.createElement("script");
    if (params.nonce) {
      dataLayerScript.setAttribute("nonce", params.nonce);
    }
    dataLayerScript.innerHTML = getDataLayerSnippet(
      params.dataLayer,
      params.dataLayerName,
    );
    return dataLayerScript;
  };

  const getNoScript = (): HTMLElement => {
    const noScript = document.createElement("noscript");
    noScript.innerHTML = getIframeSnippet(
      params.id,
      params.environment,
      params.customDomain,
    );
    return noScript;
  };

  const getScript = (): HTMLElement => {
    const script = document.createElement("script");
    if (params.nonce) {
      script.setAttribute("nonce", params.nonce);
    }
    script.innerHTML = getGTMScript(
      params.dataLayerName,
      params.id,
      params.environment,
      params.customDomain,
    );
    return script;
  };

  return {
    getDataLayerScript,
    getNoScript,
    getScript,
  };
};

function GTMProvider({ state, children }) {
  useEffect(() => {
    initGTM(state);
  }, []);

  return <GTMContext.Provider value={state}>{children}</GTMContext.Provider>;
}

export default GTMProvider;
