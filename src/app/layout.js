import React from "react";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
	title: "Jordan Devaney",
	description:
		"Professional web developer based in Michigan specializing in React and e-commerce solutions.",
	authors: [{ name: "Jordan Devaney", url: "https://jordandevaney.com" }],
	applicationName: "Jordan Devaney",
	creator: "Jordan Devaney",
	metadataBase: new URL("https://jordandevaney.com"),
	alternates: {
		canonical: "https://www.jordandevaney.com/",
	},
	openGraph: {
		title: "Jordan Devaney",
		description: "Software Engineer, Web Developer, AI Enthusiast.",
		url: "https://jordandevaney.com",
		siteName: "Jordan Devaney",
		images: [
			{
				url: "/preview.webp", // Place your OG image in /public
				width: 1200,
				height: 630,
				alt: "Jordan Devaney Portfolio",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jordan Devaney",
		description:
			"Professional web developer based in Michigan specializing in React and e-commerce solutions.",
		images: ["/preview.webp"],
	},
	robots: {
		index: true,
		follow: true,
	},
	appleWebApp: {
		capable: true,
		title: "Jordan Devaney",
		statusBarStyle: "black-translucent",
	},
	formatDetection: {
		telephone: false,
	},
	other: {
		"google-site-verification": "r0MxxBLMvLdnUJi9uGtmUeIaOLIrLYdndQmv3BpimCI",
	},
};

export const viewport = {
	themeColor: "#0f172a",
	colorScheme: "light",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" title="Portfolio Website">
			<head>
				<title>Portfolio Website</title>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
