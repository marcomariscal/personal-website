import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import Header from "../components/Header";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Marco Mariscal - Lead Software Engineer",
			},
			{
				name: "description",
				content:
					"Lead software engineer building products end to end across web, mobile, backend systems, infrastructure, AI, and EVM protocols.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<Header />
				{children}
				<Scripts />
			</body>
		</html>
	);
}
