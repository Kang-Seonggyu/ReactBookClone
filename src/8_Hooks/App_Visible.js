import {useState} from "react";
import InfoUS from "./InfoUseEffect";

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {setVisible(!visible);}}>
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            { visible && <InfoUS />}
        </div>
    );
};

export default App;