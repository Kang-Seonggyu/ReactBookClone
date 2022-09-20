//// API 테스트
// import {useState} from "react";
// import axios from "axios";
//
// // newsAPI 의 api key = 8f1e2a787f9342f591ce32f3c0050ade
// const App_for14 = () => {
//     const [data, setData] = useState(null);
//     const onClick = async () => {
//         try {
//             const response = await axios.get(
//                 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=8f1e2a787f9342f591ce32f3c0050ade'
//             );
//             setData(response.data);
//         } catch (e) {
//             console.log(e);
//         };
//     };
//     return (
//         <div>
//             <div>
//                 <button onClick={onClick}>불러오기</button>
//             </div>
//             {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
//         </div>
//     );
// };
//
// export default App_for14;

// // News 웹 페이지 Route 없음.
// import {useState, useCallback} from "react";
// import NewsList from "./components/NewsList";
// import Categories from "./components/Categories";
//
// const App_for14 = () => {
//     const [category, setCategory] = useState('all');
//     const onSelect = useCallback(category => setCategory(category), [])
//     return (
//         <>
//             <Categories category={category} onSelect={onSelect} />
//             <NewsList category={category} />
//         </>
//     );
// };
//
// export default App_for14;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App_for14 = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/:category" element={<NewsPage />} />
            </Routes>
        </Router>
    );
};

export default App_for14;