import { createSlice } from "@reduxjs/toolkit";

import {
  signUp,
  generateLoginOTP,
  logIn,
  logout,
  verifyOTP,
  resetPassword,
  generateSignupOTP,
  signupVerifyOTP,
} from "../actions/auth";
import { toast } from "sonner";
// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isUserLoggedIn: false,
  isOtpSentSuccessfully: false,
  isOtpSentSuccessfullySignup: false,
  isLogInSuccess: false,
  isLogoutSuccess: false,
  isUserLoggedIn: false,
  loggedInUserData: {},
  isOtpVerified: false,
  isOtpVerifiedSignup:false,
  emailDataChangePassword:"",
  isPasswordReset: false,
  
 
  userData:[],
};

// -------------------------------------- Slices------------------------------------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearSignUpState: (state) => {
      state.userSignedSuccess = false;
      state.otpGenerated = false;
      state.isLoading = false;
      state.isOtpVerified = false;
      state.forgetPasswordOtpValid = null;
    },
    clearLoginUpState: (state) => {
      state.isOtpSentSuccessfully = false;
    },
    clearOtpVerified: (state) => {
      state.isOtpVerified = false;
    },
    clearReduxStoreData: (state) => {
      return { isUserLoggedIn: state.isUserLoggedIn, ...initialState };
    },
    storeEmailData: (state, action) => {
      state.emailDataChangePassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // signUp lifecycle methods
      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.userSignedSuccess = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userSignedSuccess = true;

        state.userData = action.payload.data;
        toast.success(`Sign Up Successfull.`, {
          position: "top-center",
        });
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.userSignedSuccess = false;

        state.errorMessage = action.payload;
        toast.error("Internal server error", { position: "top-center" });
      })

      // sendOtpForSignup cases
      .addCase(generateSignupOTP.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(generateSignupOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isOtpSentSuccessfullySignup = true;
        state.userData= action.payload.data;
        toast.success("OTP sent to your email", {
          position: "top-center",
        });
      })
      .addCase(generateSignupOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isOtpSentSuccessfullySignup = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-center",
        });
      })
      // sendOtpForLogin cases
      .addCase(generateLoginOTP.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(generateLoginOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isOtpSentSuccessfully = true;
        state.userData = action.payload.data;
        toast.success("OTP sent to your email", {
          position: "top-center",
        });
      })
      .addCase(generateLoginOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isOtpSentSuccessfully = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-center",
        });
      })
      // signup verifyOtp
      .addCase(signupVerifyOTP.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
        state.userData=""
      })
      .addCase(signupVerifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isOtpVerifiedSignup= true;
        toast.success("OTP Verified Successfully", {
          position: "top-center",
        })
      })
      .addCase(signupVerifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isOtpVerifiedSignup=true;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-center",
        });
      })
      // verifyOtp
      .addCase(verifyOTP.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
        state.userData = "";
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isOtpVerified = true;
        toast.success("OTP Verified Successfully", {
          position: "top-center",
        });
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isOtpVerified = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-center",
        });
      })

      // reset password
      .addCase(resetPassword.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isPasswordReset = false;
        state.errorMessage = "";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isPasswordReset = true;
        toast.success("Password Changed Successfully", {
          position: "top-center",
        });
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isPasswordReset = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-center",
        });
      })

      // Login cases
      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isLogInSuccess = false;
        state.isUserLoggedIn = false;
        state.errorMessage = "";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.isUserLoggedIn = true;
        state.isLogInSuccess = true;
        state.userData= action.payload.data
        toast.success("Login Successfully", {
          position: "top-center",
        });
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isLogInSuccess = false;
        state.isUserLoggedIn = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })

      // Logout lifecycle methods
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isLogoutSuccess = false;
        state.errorMessage = "";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.isOtpSentSuccessfully = false;
        state.isLogInSuccess = false;
        state.isLogoutSuccess = true;
        state.isUserLoggedIn = false;
        state.loggedInUserData = null;
        state.isOtpVerified = false;

        state.isPasswordReset = false;
        localStorage.clear();
        sessionStorage.clear();
        localStorage.removeItem("persist:root");
        toast.success("Logout Successfully", {
          position: "top-center",
        });
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isLogoutSuccess = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

// ===========================================Exports==================================================
export default authSlice.reducer;
export const {
  resetFields,
  clearReduxStoreData,
  clearSignUpState,
  clearLoginUpState,
  clearOtpVerified,
  storeEmailData,
} = authSlice.actions;
