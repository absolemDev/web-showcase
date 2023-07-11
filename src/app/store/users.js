import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import history from "../utils/history";
import { generateAuthError } from "../utils/generateAuthError";

const initialState = localStorageService.getAccessToken()
  ? {
      auth: {
        userId: localStorageService.getUserId(),
        showcases: localStorageService.getUserShowcases()
      },
      isLoggedIn: true,
      isLoading: false,
      error: null
    }
  : {
      auth: null,
      isLoggedIn: false,
      isLoading: false,
      error: null
    };

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      state.auth = null;
      state.isLoggedIn = false;
    },
    userUpdated: (state, action) => {
      console.log(action.payload);
    },
    authRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    authErrorFixed: (state) => {
      state.error = null;
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;

const {
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userUpdated,
  authRequested
} = actions;

const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");

export const logIn =
  ({ payload, redirect }) =>
  async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
      const data = await authService.login({ email, password });
      localStorageService.setTokens(data);
      history.push(redirect);
      dispatch(
        authRequestSuccess({ userId: data.userId, showcases: data.showcases })
      );
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    history.push("/showcases");
    dispatch(
      authRequestSuccess({ userId: data.userId, showcases: data.showcases })
    );
  } catch (error) {
    const { code, message } = error.response.data.error;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else {
      dispatch(authRequestFailed(error.message));
    }
  }
};

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push("/");
};

export const updateUserData = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const data = await userService.update(payload);
    dispatch(userUpdated(data));
    history.push(`/`);
  } catch (error) {
    dispatch(userUpdateFailed(error.messag));
  }
};

export const getUserLoadingStatus = () => (state) => state.users.isLoading;
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getAuthErrors = () => (state) => state.users.error;

export default usersReducer;
