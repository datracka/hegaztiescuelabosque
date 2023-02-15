import { useEffect, useRef } from "preact/hooks";
import { css, tw } from "twind/css";

const iframeStyle = css({ overflow: "hidden", border: "none", width: "100%" });

const isObject = (data: string) => {
  return typeof data === "object" &&
    !Array.isArray(data) &&
    data !== null;
};

const FromEmbedder = ({ src }: { src: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeMessage = ({ data: message }: {
    data: string;
  }) => {
    if (!isObject(message) && iframeRef.current) {
      const i = message.indexOf(":");
      const first_half = message.substring(0, i);
      const second_half = message.substring(i + 1);
      const json_object = JSON.parse(second_half);
      switch (first_half) {
        case "formsapp-setHeight":
          iframeRef.current.height = json_object.height;
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
      title="formsapp"
      src={src}
      className={tw(iframeStyle)}
    />
  );
};

export default FromEmbedder;
