import { connect } from "react-redux";
import { incrementAsync, decrement, reset } from "../store/actions";

interface IProps {
  count: number;
  incrementAsync: () => IAction;
  decrement: () => IAction;
  reset: () => IAction;
}

const Index = (props: IProps) => (
  <div className="w-screen h-screen bg-gray-100">
    hello, world! hehe {props.count}
    <button onClick={props.incrementAsync}>increment</button>
    <button onClick={props.decrement}>decrement</button>
    <button onClick={props.reset}>reset</button>
  </div>
);

export default connect(
  ({ count }) => ({
    count
  }),
  () => ({
    incrementAsync,
    decrement,
    reset
  })
)(Index);
