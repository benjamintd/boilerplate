/* global fetch */

import { delay, takeEvery, put, all } from "redux-saga/effects";

import { actionTypes } from "./actions";

function* delayedIncrement() {
  console.log("delayed");
  yield delay(1000);
  yield put({ type: actionTypes.INCREMENT });
}

function* rootSaga() {
  console.log("here");
  yield takeEvery(actionTypes.INCREMENT_ASYNC, delayedIncrement);
  console.log("there");
}

export default rootSaga;
