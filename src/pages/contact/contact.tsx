import { Link } from "react-router-dom";

export function Contacts() {
  return (
    <div>
      <h1>Contatos</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/produtos">Produtos</Link>
    </div>
  );
}
