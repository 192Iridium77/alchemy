import axios from "./axios";

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
  return data;
};

export { signUp, logIn };
