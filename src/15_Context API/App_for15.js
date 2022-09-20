import {ColorProvider} from "./Context/color";
import SelectColors2 from "./Component/SelectColors2";
import ColorBox3 from "./Component/ColorBox3";

const App_for15 = () => {
    return(
        <ColorProvider>
            <div>
                <SelectColors2 />
                <ColorBox3 />
            </div>
        </ColorProvider>
    );
};

export default App_for15;