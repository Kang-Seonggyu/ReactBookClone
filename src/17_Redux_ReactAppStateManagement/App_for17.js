import CounterContainer from "./Containers/CounterContainer";
import TodosContainer from "./Containers/TodosContainer";

const App = () => {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer />
        </div>
    );
};

export default App;