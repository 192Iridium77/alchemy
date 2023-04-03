import { User } from "./user.types";

export interface AuthContextType {
  user?: User;
  login: () => void;
  logout: () => void;
}
