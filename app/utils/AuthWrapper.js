import { createContext, useEffect, useState } from "react";
import { authSubscribe } from "@junobuild/core-peer";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

export const AuthContext = createContext();

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));

    return () => sub();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {user !== undefined && user !== null ? (
        <div>
          {children}

          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  );
};
