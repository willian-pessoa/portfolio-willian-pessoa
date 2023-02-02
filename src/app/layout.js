import '../styles/globals.scss'
import { Roboto } from "@next/font/google"

import Link from 'next/link'

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal', 'italic'],
  subsets: ["latin"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>barra lateral
          <Link href="projetos">Projetos</Link>
          <Link href="">Home</Link>
        </nav>
        {children}
        </body>
    </html>
  )
}
