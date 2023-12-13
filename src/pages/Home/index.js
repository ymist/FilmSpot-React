import { useEffect, useState } from "react";
import api from "../services/api";
import "./home.css";
import { Link } from "react-router-dom";
// https://api.themoviedb.org/3/movie/now_playing?api_key=a65a2379df321bc528f0d3b5c209b2cf&language=pt-BR

function Home() {
	const [filmes, setFilmes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadFilmes() {
			const response = await api.get("movie/now_playing", {
				params: {
					api_key: "a65a2379df321bc528f0d3b5c209b2cf",
					language: "pt-BR",
					page: 1,
				},
			});

			//console.log(response.data.results);
			setFilmes(response.data.results.slice(1, 19));
			setLoading(false);
		}
		loadFilmes();
	}, []);

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
		<div className="container">
			<div className="lista-filmes">
				{filmes.map((filme) => {
					return (
						<Link to={`/filme/${filme.id}`}>
							<div
								className="filme-card"
								key={filme.id}
								style={{
									backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.poster_path})`,
								}}>
								<Link className="text-card" to={`/filme/${filme.id}`}>
									{filme.title}
								</Link>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
