import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/main.css";

class Main extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="w-screen h-screen bg-gray-100">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default Main;
