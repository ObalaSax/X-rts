import { createSlice } from "@reduxjs/toolkit";

export interface PostData {
  id: number;
}

interface PostState {
  post: PostData[];
}

const initialState: PostState = {
  post: [],
};

export const PostSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {},
});
