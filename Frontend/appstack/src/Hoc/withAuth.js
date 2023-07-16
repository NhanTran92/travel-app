import React from "react";
import stogare from "./../Stogare/Stogare";
import { Redirect } from "react-router-dom";

function withAuth(AuthenticatedComponent) {
  class HOC extends React.Component {
    isAuthenticated = () => {
      return stogare.getToken() !== null && stogare.getToken() !== undefined;
    };

    render() {
      return !this.isAuthenticated() ? (
        <Redirect to="/auth/sign-in" />
      ) : (
        <AuthenticatedComponent {...this.props} />
      );
    }
  }
  return HOC;
}

export default withAuth;
