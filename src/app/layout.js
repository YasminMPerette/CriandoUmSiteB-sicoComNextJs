import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Meu Site Next.js',
  description: 'Site com App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}