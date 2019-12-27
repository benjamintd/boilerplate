import { delay, takeEvery, put, all } from "redux-saga/effects";

import { actionTypes } from "./actions";

function* delayedIncrement() {
  yield delay(1000);
  yield put({ type: actionTypes.INCREMENT });
}

function* rootSaga() {
  yield takeEvery(actionTypes.INCREMENT_ASYNC, delayedIncrement);
}

export default rootSaga;
