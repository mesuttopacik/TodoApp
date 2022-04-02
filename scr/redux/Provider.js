import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import initialState from './store';

export const store = createStore(reducers, initialState);

const ToDoProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ToDoProvider;