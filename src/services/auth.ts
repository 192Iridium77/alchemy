import axios from "./axios";

interface SignUpParams {
  email: string;
  password: string;
}

const signUp = async (params: SignUpParams) => {
  const { data } = await axios.post("/auth/signup", params);

  console.log("🚀 ~ file: auth.ts:7 ~ signUp ~ data:", data);
};

export { signUp };
