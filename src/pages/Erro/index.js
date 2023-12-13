import "./erro.css";
import { Link } from "react-router-dom";

function Erro() {
	return (
		<div>
			<div className="container-erro">
				<h1>Ops...</h1>
				<h2> Essa página não existe! Clique Abaixo para voltar para a Home</h2>
				<Link to="/">Home!!!</Link>
			</div>
		</div>
	);
}
export default Erro;
