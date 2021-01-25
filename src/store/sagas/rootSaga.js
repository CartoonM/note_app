import { all } from 'redux-saga/effects';
import signInSaga from './auth';

export default function* rootSaga() {
    yield all([
        signInSaga()
    ])
}
