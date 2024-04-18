import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>Produto: {id}</h1>
    </div>
  );
}
