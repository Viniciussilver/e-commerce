import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/Auth';

interface IPrivate {
  children: ReactNode;
  isPrivate?: boolean;
  isRegister?: boolean;
}

function PrivateRoute({ children, isPrivate, isRegister }: IPrivate) {
  const { user } = useAuth();

  if (isPrivate && !user) {
    return <Navigate replace to='/login' />;
  }

  if (isRegister && user) {
    return <Navigate replace to='/produtos' />;
  }

  return <>{children}</>;
}
export default PrivateRoute;
