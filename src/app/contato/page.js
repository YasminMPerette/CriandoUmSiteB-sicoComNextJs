export default function ContatoPage() {
  return (
    <section>
      <h1>Contato</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" required />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem" required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
