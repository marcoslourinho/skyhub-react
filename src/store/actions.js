export function listReports() {
  return {
    type: 'LIST_REPORTS',
  }
}

export function createReport(report) {
  return {
    type: 'CREATE_REPORT',
    payload: {
      report
    }
  }
}

export function deleteReport(id) {
  return {
    type: 'DELETE_REPORT',
    payload: {
      id
    }
  }
}