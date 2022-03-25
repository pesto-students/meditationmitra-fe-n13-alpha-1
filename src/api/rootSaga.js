import { takeEvery, all } from "redux-saga/effects";

//Saga
import authSaga from "./saga/authSaga";
import { updateUserSaga } from "./saga/userSaga";

//Actions/Reducer
import { authActions } from "./reducers/authReducer";

export default function* rootSaga() {
  yield all([
    takeEvery(authActions.fetchAuth.type, authSaga),
    takeEvery(authActions.updateUserRole.type, updateUserSaga),
  ]);
}
