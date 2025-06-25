import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ background: '#222', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ color: '#fff' }}>Home</Link>
        <Link href="/sobre" style={{ color: '#fff' }}>Sobre</Link>
        <Link href="/contato" style={{ color: '#fff' }}>Contato</Link>
      </nav>
    </header>
  );
}