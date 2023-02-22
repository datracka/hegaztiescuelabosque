import { useEffect } from "preact/hooks";
import { createContext } from "preact";

const initialState = {};

const GTMContext = createContext(initialState);

const setupGTM = () => {
  const getDataLayerScript = (): HTMLElement => {
    const dataLayerScript = document.createElement("script");
    dataLayerScript.innerHTML = `window.dataLayer = window.dataLayer || []`;
    return dataLayerScript;
  };

  const getNoScript = (): HTMLElement => {
    const noScript = document.createElement("noscript");
    noScript.innerHTML =
      `<noscript><iframe src="https://gtm.hegaztiescuelabosque.com/ns.html?id=GTM-TMQLMZC"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;
    return noScript;
  };

  const getScript = (): HTMLElement => {
    const script = document.createElement("script");
    script.innerHTML =
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://gtm.hegaztiescuelabosque.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TMQLMZC')`;

    return script;
  };

  return {
    getDataLayerScript,
    getNoScript,
    getScript,
  };
};

const initGTM = () => {
  const gtm = setupGTM();

  const dataLayerScript = gtm.getDataLayerScript();
  const script = gtm.getScript();
  const noScript = gtm.getNoScript();

  document.head.insertBefore(dataLayerScript, document.head.childNodes[0]);
  document.head.insertBefore(script, document.head.childNodes[1]);
  document.body.insertBefore(noScript, document.body.childNodes[0]);
};

function GTMProvider({ state, children }) {
  useEffect(() => {
    initGTM(state);
  }, []);

  return <GTMContext.Provider value={state}>{children}</GTMContext.Provider>;
}

export { initGTM };
