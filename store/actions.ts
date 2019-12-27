export const actionTypes = {
  INCREMENT: "INCREMENT",
  INCREMENT_ASYNC: "INCREMENT_ASYNC",
  DECREMENT: "DECREMENT",
  RESET: "RESET"
};

export function increment(): IAction {
  return { type: actionTypes.INCREMENT };
}

export function incrementAsync(): IAction {
  return { type: actionTypes.INCREMENT_ASYNC };
}

export function decrement(): IAction {
  return { type: actionTypes.DECREMENT };
}

export function reset(): IAction {
  return { type: actionTypes.RESET };
}
