import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script
            async
            defer
            data-domain='learningsof.men'
            src='https://plausible.io/js/script.js'
          />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
