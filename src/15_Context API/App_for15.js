import ColorBox from "./Component/ColorBox";
import {ColorProvider} from "./Context/color";
import SelectColors from "./Component/SelectColors";

const App_for15 = () => {
    return(
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App_for15;