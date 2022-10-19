import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '@/common/redux';
import router from '@/common/router';
import { GlobalStyles } from '@/common/theme';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Provider>
  );
};
