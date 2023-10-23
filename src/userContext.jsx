import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    userToken: "",
    darkMode: false,
    todo: [],
  });

  useEffect(() => {
    const localUserToken = localStorage.getItem("usertoken");
    if (localUserToken) {
      const userToken = JSON.parse(localUserToken);
      setUser({ ...user, userToken });
    } else {
      const randomUserToken = Math.random().toString(36).substring(2, 9);
      localStorage.setItem("usertoken", JSON.stringify(randomUserToken));
      setUser({ ...user, userToken: randomUserToken });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
