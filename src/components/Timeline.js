import styled from "styled-components";

export const StyledTimeline = styled.div`
	width: 100%;
	max-width: 1600px;
	overflow: hidden;

	h2 {
		font-size: 16px;
		margin-bottom: 16px;
		text-transform: capitalize;
	}
	img {
		aspect-ratio: 16/9;
		font-weight: 500;
		object-fit: cover;
		width: 100%;
		max-width: 210px;
		height: auto;
	}
	section {
		width: 100%;
		padding: 16px;
		overflow-x: hidden;

		&:hover ul::-webkit-scrollbar-thumb {
			background-color: #babac0;
		}

		ul {
			list-style: none;
			width: calc(100vw - 16px * 4);
			display: grid;
			grid-gap: 16px;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-auto-flow: column;
			grid-auto-columns: minmax(200px, 1fr);
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			padding-bottom: 20px;

			&::-webkit-scrollbar {
				background-color: #fff;
				width: 16px;
			}

			&::-webkit-scrollbar-track {
				background-color: #fff;
			}
			&::-webkit-scrollbar-thumb {
				background-color: #fff;
				border-radius: 16px;
				border: 4px solid #fff;
			}

			&::-webkit-scrollbar-button {
				display: none;
			}
		}

		li {
			a {
				scroll-snap-align: start;
				span {
					padding-top: 8px;
					display: block;
					padding-right: 24px;
					color: ${({ theme }) => theme.textColorBase || "#222222"};
				}
			}
		}
	}
`;
