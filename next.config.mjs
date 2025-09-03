import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: 'https://tinyurl.com/who-is-the',
        permanent: false,
      },
    ]
  },
};

export default withContentlayer(nextConfig);
