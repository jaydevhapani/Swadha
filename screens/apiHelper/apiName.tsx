const BASE_URL = 'https://finsolve.in/testing/apifin/';
export default {
  getOtp: BASE_URL + 'customerLogin',
  verifyOtp: BASE_URL + 'customerLoginVerify',
  activeLoan: BASE_URL + 'getActiveLoans',
  activeLoanDetails: BASE_URL + 'getLoanDetail',
  advanceEmi : BASE_URL + 'getAdvanceEMI',
  holyday : BASE_URL + 'getHolidayEMI',
};
