import React, { createContext, useReducer } from 'react';

import postReducer from './reducer';

const initialState = {
  posts: [],
  comments: [],
  isLoading: false,
  errors: null,
  visible: false
};

export const PostsContext = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return (
    <PostsContext.Provider
      value={[state, dispatch]}
    >
      {children}
    </PostsContext.Provider>
  );
};