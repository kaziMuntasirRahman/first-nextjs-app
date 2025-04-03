import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: {
    default: 'My First Next App',
    template: '%s | My First NextJs App'
  },
  description: 'Generated by create next app',
  icons: '/image/images.png'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' data-theme='light'>
      <body className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
