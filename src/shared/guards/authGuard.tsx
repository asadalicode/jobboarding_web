import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IsAuthenticated } from '../utils/authService';
// import { authChecker, getUserIsGuest } from "../../../../shared/js/authChecker";

function AuthGuard({ protectedPath, children }: any) {
  const location = useLocation();
  const isAuthenticated = IsAuthenticated();
  const url = `/login?redirectUrl=${location?.pathname}`;

  return (
    <div>
      {protectedPath ? (
        isAuthenticated ? (
          children
        ) : (
          <Navigate replace to={url} />
        )
      ) : (
        children
      )}
    </div>
  );
}

export default AuthGuard;
