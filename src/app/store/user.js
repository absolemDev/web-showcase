import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import { generateServerError } from "../utils/generateServerError";

const initialState = localStorageService.getAccessToken()
  ? {
      auth: {
        _id: localStorageService.getUserId()
      },
      entities: [],
      isLoggedIn: true,
      isLoading: true,
      listLoaded: false,
      userDataLoaded: false,
      error: null
    }
  : {
      auth: null,
      entities: [],
      isLoggedIn: false,
      isLoading: false,
      listLoaded: true,
      userDataLoaded: false,
      error: null
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.userDataLoaded = true;
    },
    usersListRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.listLoaded = true;
      state.isLoading = false;
    },
    userRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      state.auth = null;
      state.isLoggedIn = false;
    },
    userRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    authErrorFixed: (state) => {
      state.error = null;
    }
  }
});

const { reducer: userReducer, actions } = userSlice;

const {
  userRequestSuccess,
  userRequestFailed,
  userLoggedOut,
  userRequested,
  usersListRequestSuccess
} = actions;

const userUpdateRequested = createAction("user/userUpdateRequested");
const userUpdated = createAction("user/userUpdated");
const userUpdateFailed = createAction("user/userUpdateFailed");

export const logIn = (payload, redirect) => async (dispatch) => {
  const { email, password } = payload;
  dispatch(userRequested());
  try {
    const data = await authService.login({ email, password });
    localStorageService.setTokens(data.authData);
    dispatch(userRequestSuccess(data.userData));
    redirect();
  } catch (error) {
    const errorMessage = error.response
      ? generateServerError(error.response.data.error.message)
      : generateServerError(error.message);
    dispatch(userRequestFailed(errorMessage));
  }
};

export const signUp = (payload, redirect) => async (dispatch) => {
  dispatch(userRequested());
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data.authData);
    dispatch(userRequestSuccess(data.userData));
    redirect();
  } catch (error) {
    console.log(error);
    const errorMessage = error.response
      ? generateServerError(error.response.data.error.message)
      : generateServerError(error.message);
    dispatch(userRequestFailed(errorMessage));
  }
};

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
};

export const updateUserData = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const data = await userService.update(payload);
    dispatch(userUpdated(data));
  } catch (error) {
    dispatch(userUpdateFailed(error.messag));
  }
};

export const loadUserData = () => async (dispatch) => {
  dispatch(userRequested());
  try {
    const data = await userService.getCurrentUser();
    dispatch(userRequestSuccess(data));
  } catch (error) {
    const errorMessage = error.response
      ? generateServerError(error.response.data.error.message)
      : generateServerError(error.message);
    dispatch(userRequestFailed(errorMessage));
  }
};

export const loadUsersList = () => async (dispatch) => {
  dispatch(userRequested());
  try {
    const data = await userService.fetchAll();
    dispatch(usersListRequestSuccess(data));
  } catch (error) {
    dispatch(userRequestFailed(error));
  }
};

export const getUserLoadingStatus = () => (state) => state.user.isLoading;
export const getListLoadedStatus = () => (state) => state.user.listLoaded;
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getServerError = () => (state) => state.user.error;
export const getUserId = () => (state) => state.user.auth?._id;
export const getUserById = (id) => (state) =>
  state.user.entities.find((item) => item._id === id);
export const getCurrentUser = () => (state) => state.user.auth;
export const getUserLoadedStatus = () => (state) => state.user.userDataLoaded;

export default userReducer;
