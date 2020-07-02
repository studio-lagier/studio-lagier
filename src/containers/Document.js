import React from "react";

export default function Document({
  Html,
  Head,
  Body,
  children,
  state: { siteData, renderMeta },
}) {
  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Studio Lagier - web development and full-stack consulting</title>
        <meta
          name="description"
          content="Studio Lagier is a one-man consulting agency for full-stack Javascript applications. I'm here to clean up your code, implement a tough new feature, or advise on best practices to scale to the next level of your business."
        />
        <link rel="icon" href="/favicon.png" />
        {/* TODO: Bundle this */}
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  );
}
