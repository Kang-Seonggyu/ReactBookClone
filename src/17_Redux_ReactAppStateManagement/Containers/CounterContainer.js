import { connect } from "react-redux";
import Counter from '../Components/Counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateToProps = state => ({
    number : state.counter.number,
});

const mapDispatchToProps = dispatch => ({
    //임시함수
    increase : () => {
        console.log('increase');
    },
    decrease : () => {
        console.log('decrease');
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);