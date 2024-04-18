import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Bem vindo a página Home</h1>
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contatos">Contatos</Link>
      <br />
      <Link to="/produtos">Produtos</Link>
    </div>
  );
}
