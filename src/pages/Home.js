import { useEffect, useState } from 'react';
import {getPostList, getTagList} from '../api';
import PostListItem from '../components/PostListItem';

const Home = () => {
	const [postList, setPostList] = useState([]);
	const [tagList, setTagList] = useState([]);
	const fetchPostList = async () => {
		const response = await getPostList();
		setPostList(response.data.content);
	};

	const fetchTagList = async () => {
		const response = await getTagList();
		setTagList(response.data);
	}

	useEffect(() => {
		fetchPostList();
		fetchTagList();
	}, []);

	return (
		<div>
			<div className='home-layout'>
				<div className='tag-list'>
					<h3>태그</h3>
					<ul>
						{
							tagList.length === 0 &&
							<li>태그가 없습니다.</li>
						}
						{
							tagList.map((tag, index) =>
								<li key={index} className={index === 1 ? 'selected' : ''}>{tag}</li>)
						}
					</ul>
				</div>
				<div className='post-list'>
					{postList.length === 0 && (
						<div className="no-posts">작성된 포스트가 없습니다.</div>
					)}
					{postList.map((post, index) => (
						<PostListItem
							key={index}
							id={post.id}
							title={post.title}
							content={post.contents}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
