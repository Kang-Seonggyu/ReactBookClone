import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App_for13 = () => {
    return (
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
        </Routes>
    );
};

export default App_for13;