import { connect } from "react-redux";
import { incrementAsync, decrement, reset } from "../store/actions";

import Button from "../components/Button";

interface IProps {
  count: number;
  incrementAsync: () => IAction;
  decrement: () => IAction;
  reset: () => IAction;
}

const Index = (props: IProps) => {
  return (
    <div>
      <span className="font-serif text-accent mr-1">
        hello, world! {props.count}
      </span>
      <Button onClick={props.incrementAsync}>increment</Button>
      <Button onClick={props.decrement}>decrement</Button>
      <Button onClick={props.reset}>reset</Button>
    </div>
  );
};

export default connect(state => state, {
  incrementAsync,
  decrement,
  reset
})(Index);
