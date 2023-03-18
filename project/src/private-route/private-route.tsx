
import { Navigate } from 'react-router-dom';
import { ROUTES, AuthorizationStatus } from '../app-routes.const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={ROUTES.SIGNIN} />
  );
};

export default PrivateRoute;
