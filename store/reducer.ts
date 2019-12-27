import { actionTypes } from "./actions";

interface IState {
  count: number;
}

export const initialState: IState = {
  count: 0
};

function reducer(state = initialState, action: IAction): IState {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count }
      };

    default:
      return state;
  }
}

export default reducer;
