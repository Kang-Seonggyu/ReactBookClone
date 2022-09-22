import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
    fallback: <div>loading....</div>
});

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true)
    };
    // preload 를 사용하여 마우스 올렸을 때 데이터 불러오고 클릭시 데이터를 나타냄.
    const onMouseOver = () => {
        SplitMe.preload();
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
                {visible && <SplitMe/>}
            </header>
        </div>
    );
}


export default App;
