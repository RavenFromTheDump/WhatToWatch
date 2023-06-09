import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux.hooks';
import { getIsDataLoaded } from '../../store/main-reducer/main-selectors';
import { getAuthorizationStatus } from '../../store/user-reducer/user-selectors';
import { BrowserRoutes } from '../../app-routes.const';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';
import Spinner from '../spinner/spinner';


const App: FC = () => {
  const isDataLoaded = useAppSelector(getIsDataLoaded);
  // const movies = useAppSelector(getFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={BrowserRoutes.MAIN} element={<MainPage />} />
        <Route path={BrowserRoutes.SIGNIN} element={<SignInPage />} />
        <Route
          path={BrowserRoutes.MYLIST}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={BrowserRoutes.FILM} element={<MoviePage />} />
        <Route path={BrowserRoutes.ADDREVIEW} element={<AddReviewPage />} />
        <Route path={BrowserRoutes.PLAYER} element={<PlayerPage />} />
        <Route path={BrowserRoutes.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
