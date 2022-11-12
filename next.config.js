/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["gifs.eco.br", "github.com"],
	},
};

module.exports = nextConfig;
