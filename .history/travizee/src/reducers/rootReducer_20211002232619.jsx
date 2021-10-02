import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { alert } from "./alert.reducer";
import { authentication } from "./authentication.reducer";
import { ConfirmEmail } from "./confirmEmail.reducer";
import { store } from "./../_helpers/store";
import { getProfile } from "./getProfile.reducer";
import { upload } from "./upload.reducer";
import { sendEmail } from "./forgotPassword.reducer";
import {
  referRequestsReducer,
  referRequestsDeletion,
  referRequestsUpdation,
  searchCompanyList,
  editsearchCompanyList,
  referNewRequest,
} from "./referrequests.reducer";

const rootReducer = combineReducers({
  registration: registration,
  alert: alert,
  sendEmail : sendEmail,
  authentication: authentication,
  ConfirmEmail: ConfirmEmail,
  getProfile: getProfile,
  upload: upload,
  referRequests: referRequestsReducer,
  deleteReferRequests: referRequestsDeletion,
  editReferRequests: referRequestsUpdation,
  searchCompanyList: searchCompanyList,
  editsearchCompanyList: editsearchCompanyList,
  referNewRequest: referNewRequest,
});

export default rootReducer;
