
import { Navigate } from 'react-router-dom';
import { BrowserRoutes, AuthorizationStatus } from '../app-routes.const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={BrowserRoutes.SIGNIN} />
  );
};

export default PrivateRoute;
