import "../styles/main.css";

import { AppProps } from "next/app";
import React from "react";

import Layout from "../components/Layout";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Meta />
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
