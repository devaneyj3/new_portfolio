import * as contentful from "contentful";
export const client = contentful.createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE, // Replace with your space ID
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN, // Replace with your access token
});
