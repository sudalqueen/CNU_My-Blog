import {Link, NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
	return (
		<div>
			<div className='tools'>
				<Link to="/write">
					<button>글쓰기</button>
				</Link>
			</div>
			<div className="profile">
				<div className="profile-pic">
					<img src="https://w.namu.la/s/ec10e4a2e44b420a8db263c0d1c5c2324bfc1870ed56f146f2af9c46a988a0b182a3ec0c823fe7ed5f6349051a7a3a6cb2fd90c41333595a4e471b32307fa3c748ee484ca6fef42bcd6cd4e94ca3d60b8f43aa0faa08d66a5924a17dc30053749253ac2ab58349f8e5f18972e036c4b7" />
				</div>
				<div>
					<h2 className="name">수정</h2>
					<p className="description">제시붐은 온다</p>
				</div>
			</div>
			<div className="nav">
				<NavLink to="/">포스트</NavLink>
				<NavLink to="/resume">소개</NavLink>
			</div>
			<Outlet />
		</div>
	);
};

export default Layout;
