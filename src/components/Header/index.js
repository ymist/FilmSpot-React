import "./header.css";
import { Link } from "react-router-dom";
function Header() {
	return (
		<header className="header-padrao">
			<Link className="logo" to="/">
				FilmSpot
			</Link>
			<Link className="favoritos" to="/favoritos">
				Meus Filmes
			</Link>
		</header>
	);
}

export default Header;
