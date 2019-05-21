import Document, { Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { BACKEND_URL } = publicRuntimeConfig

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href={`${BACKEND_URL}/static/img/favicon.png`} sizes="18x18"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
