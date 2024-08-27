import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>DSCVR Example Canvas - Next.js boilerplate</title>
        <meta
          name="description"
          content="DSCVR Example Canvas - Next.js boilerplate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="dscvr:canvas:version" content="vNext" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
