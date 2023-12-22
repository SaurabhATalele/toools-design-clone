import type { Metadata } from 'next'
import locaFont from 'next/font/local'
import './globals.css'


const paralucent = locaFont({
  src:[
    {
      path: '../public/Paralucent-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/ParalucentCond-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Paralucent-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Paralucent-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ]
})

export const metadata: Metadata = {
  title: 'Toools.design',
  description: 'This is a clone Application of Toools.design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={paralucent.className}>{children}</body>
    </html>
  )
}
