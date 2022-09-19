import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Articles from "./Articles";
import Article from "./Article";
import Layout from "./Layout";
import NotFound from "./NotFound";
import MyPage from "./MyPage";
import Login from "./Login";

const App_for13 = () => {
    return (
        <Routes>
            <Route element={<Layout /> }>
                <Route index element={<Home /> } />
                <Route path="/about" element={<About /> } />
                <Route path="/profiles/:username" element={<Profile /> } />
            </Route>
            <Route path="/articles" element={<Articles /> }>
                <Route path=":id" element={<Article /> } />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App_for13;