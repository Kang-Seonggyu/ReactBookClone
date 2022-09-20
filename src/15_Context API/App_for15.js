import ColorBox from "./Component/ColorBox";
import {ColorProvider} from "./Context/color";

const App_for15 = () => {
    return(
        <ColorProvider>
            <div>
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App_for15;