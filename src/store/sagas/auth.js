import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchLoginStart,
  autoSuccess,
  fetchLoginSuccess,
} from "../actions/auth";
import axiosNoteApi from "../../axios/axiosNoteApi";
import { LOGIN_INIT } from "../actions/actionTypes";

function* signIn({ credentials }) {
  yield put(fetchLoginStart());
  const requestBody = { user: credentials };
  try {
    const response = yield call(axiosNoteApi.post, "/auth/login/", requestBody);
    const token = response.headers["auth-token"];

    localStorage.setItem("token", token);

    yield put(autoSuccess(token));
    yield put(fetchLoginSuccess());
    //   dispatch(fetchNotes());
  } catch (err) {
    console.log(err);
  }
}

export default function* signInSaga() {
  yield takeLatest(LOGIN_INIT, signIn);
}
