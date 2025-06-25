import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h2>Corinthians</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  )
}
