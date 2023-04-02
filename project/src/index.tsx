import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MOVIE_LIST, MOCK_MOVIE } from './mocks/films';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App movie={MOCK_MOVIE} movieList={MOVIE_LIST} />
  </React.StrictMode>,
);
