import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const myBaseURL = "";
export const XApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({ baseUrl: myBaseURL }),
  endpoints: (builder) => ({}),
});
