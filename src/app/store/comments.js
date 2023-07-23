import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";

const initialState = {
  entities: [],
  isLoading: true,
  dataLoaded: false,
  error: null
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true;
    },
    commentsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    commentsRequestFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.dataLoaded = false;
    },
    commentCreateSaccess: (state, action) => {
      state.entities.push(action.payload);
    },
    commentRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload.id
      );
    }
  }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const { commentsRequested, commentsReceved, commentsRequestFiled } = actions;

export const loadCommentsList = () => async (dispatch) => {
  dispatch(commentsRequested());
  try {
    const data = await commentService.fetchAll();
    dispatch(commentsReceved(data));
  } catch (error) {
    dispatch(commentsRequestFiled(error.message));
  }
};

export const getCommentsByTarget = (target) => (state) =>
  state.comments.entities.filter((item) => item.targetId === target);
export const getCommentsLoadingStatus = () => (state) =>
  state.comments.isLoading;
export const getCommentsDataLoadedStatus = () => (state) =>
  state.comments.dataLoaded;

export default commentsReducer;
