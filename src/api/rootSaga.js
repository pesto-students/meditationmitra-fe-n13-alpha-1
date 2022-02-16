import { takeEvery, all } from "redux-saga/effects";

//Saga
import authSaga from "./saga/authSaga";

//Actions/Reducer
import { authActions } from "./reducers/authReducer";

export default function* rootSaga() {
  yield all([takeEvery(authActions.fetchAuth.type, authSaga)]);
}
