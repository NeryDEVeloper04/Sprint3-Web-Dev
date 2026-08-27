import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function FormularioLogin() {
  const [usuarioLogado, setUsuarioLogado] = useLocalStorage("lensflow_usuario", null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState({ campo: null, mensagem: "" });

  function limparErroDoCampo(campo) {
    if (erro.campo === campo) setErro({ campo: null, mensagem: "" });
  }

  function handleEntrar() {
    const nomeVal = nome.trim();
    const emailVal = email.trim();

    if (nomeVal === "") {
      setErro({ campo: "nome", mensagem: "Por favor, informe seu nome." });
      return;
    }
    if (emailVal === "" || !emailValido(emailVal)) {
      setErro({ campo: "email", mensagem: "Informe um e-mail válido (ex: voce@email.com)." });
      return;
    }
    if (senha.length < 6) {
      setErro({ campo: "senha", mensagem: "A senha deve ter ao menos 6 caracteres." });
      return;
    }

    setErro({ campo: null, mensagem: "" });
    setUsuarioLogado({ nome: nomeVal, email: emailVal });
    setNome("");
    setEmail("");
    setSenha("");
  }

  function handleSair() {
    setUsuarioLogado(null);
  }

  if (usuarioLogado) {
    return (
      <div id="form-login">
        <h3>Bem-vindo(a), {usuarioLogado.nome}!</h3>
        <p id="msg-login" className="msg-sucesso">
          Sessão salva neste navegador ({usuarioLogado.email}).
        </p>
        <button id="btn-entrar" onClick={handleSair}>
          Sair
        </button>
      </div>
    );
  }

  return (
    <div id="form-login">
      <h3>Acesse sua conta</h3>
      <input
        type="text"
        placeholder="Seu nome"
        autoComplete="name"
        className={erro.campo === "nome" ? "campo-erro" : ""}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
          limparErroDoCampo("nome");
        }}
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        autoComplete="email"
        className={erro.campo === "email" ? "campo-erro" : ""}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          limparErroDoCampo("email");
        }}
      />
      <input
        type="password"
        placeholder="Senha (mín. 6 caracteres)"
        autoComplete="current-password"
        className={erro.campo === "senha" ? "campo-erro" : ""}
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
          limparErroDoCampo("senha");
        }}
      />
      <button id="btn-entrar" type="button" onClick={handleEntrar}>
        Entrar
      </button>
      <p id="msg-login" className={erro.mensagem ? "msg-erro" : ""}>
        {erro.mensagem}
      </p>
    </div>
  );
}

export default FormularioLogin;
