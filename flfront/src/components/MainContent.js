import React from "react";
import { useSelector } from "react-redux";

function MainContent() {
  // Use useSelector to directly access the Redux state
  const token = useSelector((state) => state.auth.token); // Access token from the auth slice
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access authentication status

  return (
    <>
      <p>Token Information:</p>
      {isAuthenticated ? (
        <h1>Your Token: {token}</h1>
      ) : (
        <h1>You are not authenticated. Please log in.</h1>
      )}
    </>
  );
}

export default MainContent;
