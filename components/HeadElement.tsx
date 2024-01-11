import { Head } from "$fresh/runtime.ts";
import { FunctionalComponent, h } from "preact";

export type HeadProps = {
  url: URL;
  title: string;
  description: string;
  image?: string;
  children?: h.JSX.Element | h.JSX.Element[] | string | number | null;
};

const HeadElement: FunctionalComponent<HeadProps>  =  (
  { description, image, title, url, children }: HeadProps,
) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="canonical" href={url.href} />
      <meta name="description" content={description} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url.hostname} />
      <meta property="twitter:url" content={url.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {children ? children : null}
    </Head>
  );
}

export default HeadElement