import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1>Página Sobre</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contatos">Contatos</Link>
      <br />
      <Link to="/produtos">Produtos</Link>
    </div>
  );
}
