import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
	const estilosDaHomePage = {
		// backgroundColor: "red"
	};

	// console.log(config.playlists);

	return (
		<>
			<CSSReset />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					maxWidth: "1600px",
					// backgroundColor: "red",
				}}
			>
				<Menu />
				<Header />
				<Timeline playlists={config.playlists}>Conteúdo</Timeline>
			</div>
		</>
	);
}

export default HomePage;

const StyledHeader = styled.div`
	img {
    width: 100%;
    object-fit: cover;
		height: 330px;
	}
	.user-info {
		margin-top: 50px;
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;

		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
	}
`;
function Header() {
	return (
		<StyledHeader>
			<img
				src="https://gifs.eco.br/wp-content/uploads/2021/09/gifs-de-anime-aesthetic-49.gif"
				alt="banner"
			/>
			<section className="user-info">
				<img src={`https://github.com/${config.github}.png`} />
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
				</div>
			</section>
		</StyledHeader>
	);
}

function Timeline(propriedades) {
	const playlistNames = Object.keys(propriedades.playlists);

	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = propriedades.playlists[playlistName];

				return (
					<section>
						<h2>{playlistName}</h2>
						<ul>
							{videos.map((video) => {
								return (
									<li>
										<a href={video.url}>
											<img src={video.thumb} />
											<span>{video.title}</span>
										</a>
									</li>
								);
							})}
						</ul>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
