import { call, put } from "redux-saga/effects";
import { LoginService } from "../services/authService";
import { authActions } from "../reducers/authReducer";

export default function* authSaga() {
  try {
    // put yup validation here
    const response = yield call(LoginService);
    if (response.status === 200) {
      if (response.data) {
        yield put(authActions.fetchAuthSuccess(response.data));
      }
    } else {
      yield put(authActions.fetchAuthFailure(response));
    }
  } catch (e) {
    yield put(authActions.fetchAuthFailure(e));
  }
}
