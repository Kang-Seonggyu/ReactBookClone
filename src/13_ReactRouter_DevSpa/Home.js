import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>가장 먼저 보여지는 페이지 입니다.</p>
            <Link to="/about">소개</Link>
        </div>
    );
};

export default Home;