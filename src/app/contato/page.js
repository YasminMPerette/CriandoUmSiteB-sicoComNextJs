'use client'; // para usar estados e eventos

import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function validar() {
    const novosErros = {};
    if (!formData.nome.trim()) novosErros.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      novosErros.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      novosErros.email = 'Email inválido';
    }
    if (!formData.mensagem.trim()) novosErros.mensagem = 'Mensagem é obrigatória';
    return novosErros;
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validacao = validar();
    if (Object.keys(validacao).length === 0) {
      setEnviado(true);
      setErros({});
    } else {
      setErros(validacao);
      setEnviado(false);
    }
  }

  return (
    <section>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        {erros.nome && <span className="erro">{erros.nome}</span>}

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {erros.email && <span className="erro">{erros.email}</span>}

        <label>Mensagem:</label>
        <textarea name="mensagem" value={formData.mensagem} onChange={handleChange}></textarea>
        {erros.mensagem && <span className="erro">{erros.mensagem}</span>}

        <button type="submit">Enviar</button>
      </form>

      {enviado && <p className="sucesso">Mensagem enviada com sucesso!</p>}
    </section>
  );
}
