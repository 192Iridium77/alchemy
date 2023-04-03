import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuthContext(): any {
  const user = useContext(AuthContext);
  if (!user) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return user;
}
