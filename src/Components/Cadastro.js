import { useState } from "react";
import Nome from "./Nome";
function Cadastro() {
  const [aluno, setAluno] = useState({ nome: "", email: "", idade: "" });

  function handleRegistro() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    setAluno({ nome, email, idade });
  }
  return (
    <div>
      <h2>Nome:</h2>
      <input type="text" id="nome" />
      <br></br>
      <h2>email:</h2>
      <input type="text" id="email" />
      <h2>idade:</h2>
      <input type="text" id="idade" />
      <br></br>
      <button onClick={handleRegistro}>Mudar nome</button>
      <div>
        <h2>Dados do Aluno:</h2>
        <p>Nome: {aluno.nome}</p>
        <p>Email: {aluno.email}</p>
        <p>Idade: {aluno.idade}</p>
      </div>
    </div>
  );
}

export default Cadastro;
