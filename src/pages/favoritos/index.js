import { Link } from "react-router-dom";
import "./Favoritos.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Favoritos() {
	const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const minhaLista = localStorage.getItem("@FilmSpot");
		setFilmes(JSON.parse(minhaLista) || []);
	}, []);

	function excluirFilme(id) {
		let filtroFilmes = filmes.filter((item) => {
			return item.id !== id;
		});
		setFilmes(filtroFilmes);
		localStorage.setItem(`@FilmSpot`, JSON.stringify(filtroFilmes));
		toast.success("Filme Removido Com Sucesso!!!");
	}

	return (
		<div className="container-favoritos">
			<h1>Favoritos</h1>

			{filmes.length === 0 && <span className="sem-favoritos">Favoritos está vazio!!! 😑</span>}

			<ul>
				{filmes.map((item) => {
					return (
						<li key={item.id} className="item-lista">
							<button
								className="botao-excluir"
								onClick={() => {
									excluirFilme(item.id);
								}}>
								<i class="bx bxs-trash bx-tada-hover"></i>
							</button>
							<img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
							<span>{item.title}</span>
							<Link to={`/filme/${item.id}`}>
								<button>DETALHES</button>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Favoritos;
