import React, { useState, useEffect, useContext } from "react";
import { LegitContext } from "../contexts/LegitContext";

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const getUser = () =>
  sleep(1000)
    // .then(() => ({ username: "elmo" }));
    .then(() => null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    status: "pending",
    error: "null",
    user: "null"
  });

  useEffect(() => {
    getUser().then(
      user => setAuthState({ status: "success", error: null, user }),
      error =>
        setAuthState({
          status: "error",
          error,
          user: null
        })
    );
  }, []);

  return (
    <LegitContext.Provider value={authState}>
      {authState.status === "pending" ? (
        "rendering a page"
      ) : authState.status === "error" ? (
        <div>
          <h1>{authState.error}</h1>
        </div>
      ) : (
        children
      )}
    </LegitContext.Provider>
  );
};

const useAuthState = () => {
  const state = useContext(LegitContext);
  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated
  };
};

function Header() {
  const { user } = useAuthState();
  return user ? <p>Hello {user.username}</p> : <p>Please login</p>;
}

function Content() {
  const { user } = useAuthState();
  return user ? (
    <p>I am so happy to have you here {user.username}.</p>
  ) : (
    <p>You must login to read the message</p>
  );
}

export function Home() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
