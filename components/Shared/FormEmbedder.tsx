import { useEffect, useRef } from "preact/hooks";
import { css, tw } from "twind/css";

const iframeStyle = css({ overflow: "hidden", border: "none" });

const isObject = (data) => {
  console.log("data", data);
  return typeof data === "object" &&
    !Array.isArray(data) &&
    data !== null;
};

const FromEmbedder = ({ src }: { src: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeMessage = (e) => {
    console.log(e.data);
    if (!isObject(e.data) && iframeRef.current) {
      const message = e.data.split(":");
      console.log("eee", e.data);
      switch (message[0]) {
        case "setHeight":
          iframeRef.current.height = message[1];
          break;
        default:
          console.log("do nothing");
      }
    }
  };
  useEffect(() => {
    addEventListener("message", handleIframeMessage, false);
    return () => {
      removeEventListener("message", handleIframeMessage);
    };
  });
  return (
    <iframe
      ref={iframeRef}
      title="jotform"
      src={src}
      className={tw(iframeStyle)}
    />
  );
};

export default FromEmbedder;
