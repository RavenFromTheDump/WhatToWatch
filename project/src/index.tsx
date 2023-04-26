import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MOCK_MOVIE } from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App movie={MOCK_MOVIE} />
    </Provider>
  </React.StrictMode>,
);
