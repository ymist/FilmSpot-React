import "./film.css";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";

function Film() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [filme, setFilme] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadFilm() {
			await api
				.get(`/movie/${id}`, {
					params: {
						api_key: "a65a2379df321bc528f0d3b5c209b2cf",
						language: "pt-BR",
					},
				})
				.then((response) => {
					setFilme(response.data);
					setLoading(false);
				})
				.catch(() => {
					navigate("/", { replace: true });
					return;
				});
		}
		loadFilm();

		return () => {
			console.log("O componente foi desmontado");
		};
	}, [id, navigate]);

	function salvarFilm() {
		const minhaLista = localStorage.getItem("@FilmSpot");

		let filmesSalvos = JSON.parse(minhaLista) || [];

		const hasFilm = filmesSalvos.some((filmSalvo) => filmSalvo.id === filme.id);

		if (hasFilm) {
			toast.warn("Esse Filme Já Existe no Seus Favoritos!!!");
			return;
		}
		filmesSalvos.push(filme);
		localStorage.setItem("@FilmSpot", JSON.stringify(filmesSalvos));
		toast.success("Filme Salvo Com Sucesso!!!");
	}

	if (loading) {
		return (
			<div className="loading">
				<div className="loading-spinner">
					<div></div>
				</div>
			</div>
		);
	}

	return (
		<div className="container-film">
			<h1 className="title-film">{filme.title}</h1>
			<img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
			<div className="trailer-save">
				<button onClick={salvarFilm}>Salvar</button>
				<a
					href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
					target="blank"
					rel="external">
					Trailer
				</a>
			</div>
			<div className="overview-film">
				<h3>Sinopse:</h3>
				<article>{filme.overview}</article>
			</div>
			<div className="nota">
				<h3>
					Avaliação: <em>{filme.vote_average}</em>
				</h3>
			</div>
		</div>
	);
}

export default Film;
