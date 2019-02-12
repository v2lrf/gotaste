import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class GovinuDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="da">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,700"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sans antialiased">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default GovinuDocument
