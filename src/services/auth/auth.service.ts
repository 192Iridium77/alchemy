import axios from "../axios";
import { User } from "../../types/user.types";

interface SignUpParams {
  email: string;
  password: string;
}

interface LogInParams {
  email: string;
  password: string;
}

const signUp = async (params: SignUpParams) => {
  const { data } = await axios.post("/auth/signup", params);
  return data;
};

const logIn = async (params: LogInParams) => {
  const { data } = await axios.post("/auth/login", params);

  localStorage.setItem("token", data.accessToken);
  localStorage.setItem("userId", data.userId);

  return data;
};

const getLoggedInUser = async (): Promise<User | undefined> => {
  const token = localStorage.getItem("token");

  if (token) {
    const userId = localStorage.getItem("userId");
    const { data } = await axios.get(`/users/${userId}`);
    return data;
  }
};

export { signUp, logIn, getLoggedInUser };
