import MyLayout from '@/components/MyLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </div>
  )
}
