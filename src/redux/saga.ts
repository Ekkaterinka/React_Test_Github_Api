import { put , spawn,debounce, retry,takeLatest, call, takeLeading} from 'redux-saga/effects';
import { searchUser, detailsUser } from '../api'
import {
    searchUsersRequest,
    searchUsersSuccess,
    searchUsersFailure,
    changeUsersField
} from './slices/usersSlice'

import {
  getDetails,
  getDetailsSuccess,
  getDetailsError
} from './slices/detailsSlice'

function filterChangeSearchAction({type, payload}:{ type:any, payload:any }) {
    return type === changeUsersField().type && payload.search.trim() !== '';
}
function* handleChangeSearchSaga(action:any) {
    yield put(searchUsersRequest(action.payload.search));
}

function* watchChangeSearchSaga() {
    yield debounce(1000, filterChangeSearchAction, handleChangeSearchSaga);
}
function* handleSearchUsersSaga(action:any): any {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000;
        const data = yield retry(
            retryCount,
            retryDelay,
            searchUser,
            action.payload
        );
        yield put(searchUsersSuccess(data));
    } catch (e) {
        yield put(searchUsersFailure('Ошибка'));
    }
}

function* watchSearchSkillsSaga() {
    yield takeLatest(searchUsersRequest().type, handleSearchUsersSaga);
}

function* getDetailsSaga(action:any):any {
    try {
      const data = yield call(detailsUser, action.payload);
      yield put(getDetailsSuccess(data));
    } catch (err: any) {
      yield put(getDetailsError(err));
    }
  }
export default function* saga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga);
    yield takeLeading(getDetails.type, getDetailsSaga);
}

