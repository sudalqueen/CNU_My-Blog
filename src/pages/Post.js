import { useEffect, useState } from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import {deletePostById, getPostById} from '../api';

const Post = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);

	const fetchPostById = async () => {
		const response = await getPostById(params.postId);
		setPost(response.data);
	};

	const clickDeleteButton = () => {
		const result = window.confirm('정말로 게시글을 삭제하시겠습니까?');
		if (result) {
			requestDeletePostById();
		}
	}
	const requestDeletePostById = async () => {
		await deletePostById(params.postId);
		navigate("/");
	}

	useEffect(() => {
		fetchPostById();
	}, []);

	if (!post) {
		return (
			<div>
				<div>
					<Link to="/">
						<button>홈으로 가기</button>
					</Link>
				</div>
				<div>존재하지 않는 게시글 입니다.</div>
			</div>
		);
	}

	return (
		<div>
			<div className='tools'>
				<Link to="/write" state={{ postId: params.postId }} className='mr'>
					<button>수정하기</button>
				</Link>
				<button onClick={clickDeleteButton} className='danger-button'>삭제하기</button>
			</div>
			<div>
				<h2>{post.title}</h2>
				<p>{post.contents}</p>
			</div>
		</div>
	);
};

export default Post;
