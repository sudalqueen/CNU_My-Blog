import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, content }) => {
	return (
		<Link className="post-list-item" to={`/post/${id}`}>
			<h2 className="title">{title}</h2>
			<p className="content">{content}</p>
		</Link>
	);
};

export default PostListItem;
