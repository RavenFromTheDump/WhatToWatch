import AddReview from '../../components/add-review/add-review';
import { getMovieById } from '../../utils/movie';
import { Link, useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';


const AddReviewPage: React.FC = () => {
  const { id } = useParams();
  const movie = getMovieById(Number(id));

  if (!movie) {
    return <NotFoundPage />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie?.posterImage} alt={movie?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie?.id ?? '#'}`} className="breadcrumbs__link">{movie?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie?.id ?? '#'}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie?.posterImage} alt={movie?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReview />
      </div>

    </section>
  );
};

export default AddReviewPage;
