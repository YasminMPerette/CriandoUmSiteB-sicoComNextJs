import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="home-container">
      <div className="home-image">
        <Image
          src="/escudo-Corinthians.png"
          alt="Escudo do Corinthians"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="home-text">
        <h1>Bem-vindo ao Corinthians!</h1>
        <p>
          O Sport Club Corinthians Paulista é mais que um time, é uma nação.
          Explore nosso site para conhecer mais sobre essa paixão.
        </p>
      </div>
    </section>
  )
}
