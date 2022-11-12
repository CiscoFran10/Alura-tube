import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import React from "react";

function HomePage() {
	const [valorDaBusca, setValorDaBusca] = React.useState("");

	return (
		<>
			<CSSReset />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					maxWidth: "1600px",
				}}
			>
				<Menu setValorDaBusca={setValorDaBusca} />
				<Header />
				<Timeline
					valorDaBusca={valorDaBusca}
					favorites={config.favorites}
					playlists={config.playlists}
				>
					Conteúdo
				</Timeline>
			</div>
		</>
	);
}

export default HomePage;

const StyledHeader = styled.div`
	.user-info {
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

const StyledBanner = styled.div`
	height: 250px;
	background: url(${({ bg }) => bg}) no-repeat center;
	background-size: cover;
`;

function Header() {
	return (
		<StyledHeader>
			<StyledBanner bg={config.bg} />
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

function Timeline({ valorDaBusca, ...propriedades }) {
	const playlistNames = Object.keys(propriedades.playlists);
	const favoritesList = propriedades.favorites;

	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = propriedades.playlists[playlistName];

				return (
					<section className="playlists" key={playlistName}>
						<h2>{playlistName}</h2>
						<ul>
							{videos
								.filter((video) => {
									return video.title
										.toLowerCase()
										.includes(valorDaBusca.toLowerCase());
								})
								.map((video) => {
									return (
										<li key={video.title}>
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
			<section className="favorites">
				<h2>AluraTubes Favoritos</h2>
				<ul>
					{favoritesList.map((favorite) => (
						<li key={favorite.link}>
							<a href={`https://github.com/${favorite.link}`}>
								<img
									src={`https://github.com/${favorite.link}.png`}
									alt={favorite.name}
								/>
								<span>@{favorite.link}</span>
							</a>
						</li>
					))}
				</ul>
			</section>
		</StyledTimeline>
	);
}
