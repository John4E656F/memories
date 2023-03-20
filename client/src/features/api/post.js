import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getPosts: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: 'posts/',
        method: 'POST',
        body,
      }),
    }),
    editPost: builder.mutation({
      query: ({ id, body }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery, useAddPostMutation, useEditPostMutation, useDeletePostMutation } = postsApi;
