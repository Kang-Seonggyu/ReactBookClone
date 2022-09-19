import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Articles from "./Articles";
import Article from "./Article";
import Layout from "./Layout";

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

        </Routes>
    );
};

export default App_for13;