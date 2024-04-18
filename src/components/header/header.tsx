import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <header>
      <h2>React Router Dom</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/produtos/1">Produtos</Link>
      </div>
    </header>
  );
}
