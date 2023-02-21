import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getPostById, createPost, updatePostById } from '../api';

const Write = () => {
	const { state } = useLocation();
	const isModified = state?.postId;
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleChangeContent = (event) => {
		setContent(event.target.value);
	};

	const requestCreatePost = async () => {
		await createPost(title, content);
	};

	const requestUpdatePost = async () => {
		await updatePostById(state.postId, title, content);
	}

	const clickConfirm = () => {
		if (!title || !content) {
			alert('빈 값이 있습니다.');
			return;
		}

		if (isModified) {
			requestUpdatePost();
		} else {
			requestCreatePost();
		}
		navigate("/");
	};

	const fetchPostById = async (postId) => {
		const response = await getPostById(postId);
		setTitle(response.data.title);
		setContent(response.data.contents);
	};

	useEffect(() => {
		if (state?.postId) {
			fetchPostById(state.postId);
		}
	}, []);

	return (
		<div>
			<div className="tools">
				<Link to="/">
					<button className="outlined-button mr">취소</button>
				</Link>
				<button onClick={clickConfirm}>확인</button>
			</div>
			<h2>글 {isModified ? '수정' : '작성'}하기</h2>
			<div>
				<input
					className="write-title"
					value={title}
					onChange={handleChangeTitle}
					placeholder="제목을 입력하세요"
				/>
				<textarea
					className="write-content"
					value={content}
					onChange={handleChangeContent}
					placeholder="내용을 입력하세요"
				/>
			</div>
		</div>
	);
};

export default Write;
