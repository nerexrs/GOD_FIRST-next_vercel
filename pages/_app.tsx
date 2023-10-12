import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { NextPage } from 'next'
// import { ReactElement, ReactNode } from 'react'

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }
export default function App({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout || ((page) => page);

  return <Component {...pageProps} />
}
