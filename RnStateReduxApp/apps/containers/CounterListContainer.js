/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import App from '../components/App';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: (index) => dispatch(actions.increment(index)), // 
    handleDecrement: (index) => dispatch(actions.decrement(index)),
    handleAddCounter: () => dispatch(actions.add()), // w
    handleRemoveCounter: () => dispatch(actions.remove()), // w
});

// connect( state, action 매핑값)(Presentation[Component dir] comp 연결)
const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default CounterListContainer;
