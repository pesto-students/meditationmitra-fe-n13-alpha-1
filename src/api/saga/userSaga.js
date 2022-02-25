import { call, put } from "redux-saga/effects";
import { UpdateUserRole } from "../services/authService";
import { authActions } from "../reducers/authReducer";

export function* updateUserSaga(data) {
  try {
    // put yup validation here
    const response = yield call(UpdateUserRole, data);
    if (response.status === 200) {
      if (response.data) {
        yield put(authActions.updateUserRoleSuccess(response.data));
      }
    } else {
      yield put(authActions.updateUserRoleFailure(response));
    }
  } catch (e) {
    yield put(authActions.updateUserRoleFailure(e));
  }
}
