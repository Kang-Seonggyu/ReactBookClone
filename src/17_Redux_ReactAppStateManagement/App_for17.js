import Todos from "./Components/Todos";
import CounterContainer from "./Containers/CounterContainer";

const App = () => {
    return (
        <div>
            <CounterContainer />
            <hr />
            <Todos />
        </div>
    );
};

export default App;