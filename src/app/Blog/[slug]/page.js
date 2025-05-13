"use client";
import Article from "@/components/Blog/Article/Article";
import ArticleLayout from "@/components/Blog/ArticleLayout/ArticleLayout";
import { useParams } from "next/navigation";
import React from "react";

export default function ArticlePage() {
	const { slug } = useParams();
	return (
		<ArticleLayout>
			<Article slug={slug} />
		</ArticleLayout>
	);
}
