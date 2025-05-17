"use client";
import { createContext, useContext, useEffect, useState } from "react";
import * as contentful from "contentful";

const client = contentful.createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE, // Replace with your space ID
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN, // Replace with your access token
});

const BlogContext = createContext();

export const useBlogContext = () => {
	return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const data = await client.getEntries();
			setArticles(data.items);
		};
		getData();
	}, []);

	return (
		<BlogContext.Provider value={{ articles }}>{children}</BlogContext.Provider>
	);
};
