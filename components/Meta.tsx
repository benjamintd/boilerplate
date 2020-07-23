import Head from "next/head";
import React from "react";

export default function Meta() {
  const title = "Title";
  const description = "Description.";
  const cardImage = "https://picsum.photos/200/300";
  const url = "https://google.com";
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={cardImage} property="og:image" />
      <meta content={url} property="og:url" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={cardImage} name="twitter:image" />
      <meta content="summary_large_image" name="twitter:card"></meta>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <link href="/icon-192.png" rel="icon" type="image/png"></link>
      <meta content="#ffffff" name="theme-color" />
      <link href="/icon-512.png" rel="apple-touch-icon"></link>
      <link href="/manifest.webmanifest" rel="manifest"></link>
    </Head>
  );
}
