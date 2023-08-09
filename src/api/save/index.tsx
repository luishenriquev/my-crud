import axios from "axios";
import { User } from "../../type/user";
import { useApi } from "../../hooks/useApi";

export default async function Save(user: User) {
  const result = await axios.post("http://localhost:3000/users", user);
  console.log("result", result.data);

  return result.data;
}
