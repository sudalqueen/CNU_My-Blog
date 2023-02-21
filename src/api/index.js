import axios from 'axios';

const instance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: 'http://144.24.77.45',
});

export const getPostList = () => {
	return instance.get('/posts');
};

export const createPost = (title, contents, tag) => {
	return instance.post('/posts', {
		title,
		contents,
		tag,
	});
};

export const getPostById = (id) => {
	return instance.get(`/posts/${id}`);
};

export const updatePostById = (id, title, contents, tag) => {
	return instance.put(`/posts/${id}`, {
		title,
		contents,
		tag,
	});
};

export const deletePostById = (id) => {
	return instance.delete(`/posts/${id}`);
};

export const getTagList = () => {
	return instance.get('/tags');
};
