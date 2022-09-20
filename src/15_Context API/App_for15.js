import ColorBox from "./Component/ColorBox";
import ColorContext from "./Context/color";

const App_for15 = () => {
    return(
        <ColorContext.Provider value={{ color: 'red'}}>
            <div>
                <ColorBox />
            </div>
        </ColorContext.Provider>
    );
};

export default App_for15;