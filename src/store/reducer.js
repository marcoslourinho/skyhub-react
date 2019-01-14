const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function reports(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LIST_REPORTS':
      return { ...state, loading: true };
    case 'SUCCESS_LIST_REPORTS':
      return { data: action.payload.data, loading: false };
    case 'FAILURE_LIST_REPORTS':
      return { data: [], loading: false };
    case 'CREATE_REPORT':
      return { ...state, loading: true };
    case 'SUCCESS_CREATE_REPORT':
      return { data: action.payload.data, loading: false };
    case 'FAILURE_CREATE_REPORT':
      return { data: action.payload.data, loading: false };
    case 'DELETE_REPORT':
      return { ...state, loading: true };
    case 'SUCCESS_DELETE_REPORT':
      return { data: action.payload.data, loading: false };
    case 'FAILURE_DELETE_REPORT':
      return { data: action.payload.data, loading: false };
    default:
      return state;
  }
}