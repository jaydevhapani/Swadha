const BASE_URL = 'https://finsolve.in/testing/apifin/';
export default {
  getOtp: BASE_URL + 'customerLogin',
  verifyOtp: BASE_URL + 'customerLoginVerify',
  activeLoan: BASE_URL + 'getActiveLoans',
  activeLoanDetails: BASE_URL + 'getLoanDetail',
  advanceEmi: BASE_URL + 'getAdvanceEMI',
  holyday: BASE_URL + 'getHolidayEMI',
  getProfile: BASE_URL + 'getProfile',
  myLoans: BASE_URL + 'getMyLoans',
  getInTouch : BASE_URL + 'getInTouch',
  getMandateDetail : BASE_URL + 'getMandateDetail',
  applyNewLoan : BASE_URL + 'applyNewLoan',
  getNotifications  : BASE_URL + 'getNotifications',
  getFaqs : BASE_URL + 'getFaqs',
  getPrivacyPolicy : BASE_URL + 'getPrivacyPolicy',
  foreCloseRequest : BASE_URL + 'foreCloseRequest',
};
