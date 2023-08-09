import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  celular: string;
};

export function useApi() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return users;
}
