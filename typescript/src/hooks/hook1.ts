import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/type1";



export const useUserData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      // const data = [];
       setUsers(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, isLoading, fetch };
};
