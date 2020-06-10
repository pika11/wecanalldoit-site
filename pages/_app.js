import "normalize.css";
import "../styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.svg"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
