import Head from "next/head";

import "../styles/main.css";

export default ({ children }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="w-screen h-screen bg-gray-100 p-2">{children}</div>
  </>
);
