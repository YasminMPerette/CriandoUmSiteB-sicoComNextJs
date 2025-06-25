import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

export const metadata = {
  title: 'Corinthians',
  description: 'Site dedicado ao Sport Club Corinthians Paulista',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
