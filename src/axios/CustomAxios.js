import axios from "axios";
const customInstance = (url) => {
	return axios.create({
		baseURL: url,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
		},
	});
};

export default customInstance;
