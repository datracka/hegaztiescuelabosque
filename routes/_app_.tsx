import { AppProps } from "$fresh/server.ts";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

const gtmParams = {
  id: "GTM-TMQLMZC",
  customDomain: "https://gtm.hegaztiescuelabosque.com",
};

export default function App(props: AppProps) {
  console.log("Hello World", props);
  return (
    <GTMProvider state={gtmParams}>
      <props.Component />
    </GTMProvider>
  );
}
