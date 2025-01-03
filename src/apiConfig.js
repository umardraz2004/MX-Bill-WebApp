const API_DOMAIN = 'https://mxbillpay.hmstech.org/api';

const API_ENDPOINTS = {
  AUTH: {
    Login: API_DOMAIN + '/auth/login',
    Register: API_DOMAIN + '/auth/register',
    Logout: API_DOMAIN + '/auth/logout',
    VerfiyEmailOtp: API_DOMAIN + '/auth/verify-email',
    ResendOtp: API_DOMAIN + '/auth/resend-otp',
    ForgotPassword: API_DOMAIN + '/auth/forget-password',
    VerifyPasswordOtp: API_DOMAIN + '/auth/reset-password-otp-verification',
    ResetPassword: API_DOMAIN + '/auth/reset-password',
  },
  USER_INFORMATION:{
    UserDetail: API_DOMAIN + '/user-details',
    UserAccount: API_DOMAIN + '/accountEnquiry',
  },
  ACCOUNT_MANAGEMENT: {
    RequestBvnConsent: API_DOMAIN + '/accounts/bvn-consent',
    CreateIndividualAccount: API_DOMAIN + '/accounts/individual',
    CreateCorporateAccount: API_DOMAIN + '/client/corporate',
    ReleaseAccount: API_DOMAIN + '/accounts/release',
    DeleteAccount: API_DOMAIN + '/accounts',
  },
  BILL_MANAGEMENT: {
    BillList: API_DOMAIN + '/bills',
    CreateBill: API_DOMAIN + '/bills',
    UpdateBill: API_DOMAIN + '/bills',
    DeleteBill: API_DOMAIN + '/bills',
  },
};

export { API_DOMAIN, API_ENDPOINTS };
