import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import api from '../services/api'

const apiGet = async () => {
  try {
    const response = await api.get('/reports');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const apiPost = async (report) => {
  try {
    await api.post('/reports', report);
  } catch (error) {
    console.log(error);
  }
}

const apiDelete = async (id) => {
  try {
    await api.delete(`/reports/${id}`);
  } catch (error) {
    console.log(error);
  }
}

function* listReports() {
  try {
    const response = yield call(apiGet);
    yield put({ type: 'SUCCESS_LIST_REPORTS', payload: { data: response } });
  } catch (error) {
    yield put({ type: 'FAILURE_LIST_REPORTS' });
  }
}

function* createReport(action) {
  try {
    yield call(apiPost, action.payload.report)
    yield listReports();
    yield put({type: 'SUCCESS_CREATE_REPORT'})
  } catch (error) {
    yield put({type: 'FAILURE_CREATE_REPORT'})
    console.error(error)
  }
}

function* deleteReport(action) {
  try {
    yield call(apiDelete, action.payload.id);
    yield listReports();
    yield put({ type: 'SUCCESS_DELETE_REPORT'});
  } catch (error) {
    yield put({ type: 'FAILURE_DELETE_REPORT' });
  }
}

export default function* root() {
  yield [
    takeEvery('LIST_REPORTS', listReports),
    takeEvery('CREATE_REPORT', createReport),
    takeLatest('DELETE_REPORT', deleteReport)
  ];
}