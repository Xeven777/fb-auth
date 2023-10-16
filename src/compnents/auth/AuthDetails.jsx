import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const AuthDetails = () => {
  const [authuser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const usersignout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign Out succesfull");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="sign-cont">
      {authuser ? (
        <>
          <p>{`Signed In as ${authuser.email}`}</p>
          <button onClick={usersignout}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
