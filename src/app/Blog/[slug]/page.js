"use client";
import { useBlogContext } from "@/context/BlogContext";
import { useParams } from "next/navigation";
import React from "react";

export default function ArticlePage() {
	const { articles } = useBlogContext();
	console.log(articles);
	const { slug } = useParams();
	console.log(slug);
	return <div>{slug}</div>;
}
