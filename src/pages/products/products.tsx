import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>Produto: {id}</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contatos">Contatos</Link>
    </div>
  );
}
