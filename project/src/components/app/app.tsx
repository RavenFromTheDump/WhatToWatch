import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player-page/player-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PrivateRoute from '../../private-route/private-route';
import { Movie } from '../../types/main-page.types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, BrowserRoutes } from '../../app-routes.const';

type Props = {
  movie: Movie;
}


const App: React.FC<Props> = (props) => {
  const { movie } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BrowserRoutes.MAIN} element={<MainPage movie={movie} />} />
        <Route path={BrowserRoutes.ADDREVIEW} element={<AddReviewPage />} />
        <Route path={BrowserRoutes.FILM} element={<MoviePage />} />
        <Route path={BrowserRoutes.MYLIST}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={BrowserRoutes.NOTFOUND} element={<NotFoundPage />} />
        <Route path={BrowserRoutes.PLAYER} element={<PlayerPage movie={movie} />} />
        <Route path={BrowserRoutes.SIGNIN} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
