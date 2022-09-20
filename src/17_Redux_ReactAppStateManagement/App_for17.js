import CounterContainer from "./Containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

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