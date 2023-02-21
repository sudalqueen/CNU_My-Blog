import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/resume" element={<Resume />} />
			</Route>
			<Route path="/post/:postId" element={<Post />} />
			<Route path="/write" element={<Write />} />
		</Routes>
	);
}

export default App;
