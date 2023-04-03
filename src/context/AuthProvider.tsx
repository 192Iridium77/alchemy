import React, { useState, useEffect } from "react";
import { getLoggedInUser } from "../services/auth/auth.service";
import AuthContext from "./AuthContext";
import { User, UserRole } from "../types/user.types";

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    (async () => {
      const currentUser = await getLoggedInUser();
      setUser(currentUser);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: user?.id,
        isAdmin: user?.role === UserRole.ADMIN,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
