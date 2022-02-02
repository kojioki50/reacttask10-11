import React, { createContext, ReactNode, useState } from "react";
import { User } from "../types/type1";

// interface ContextInterface {
//   count: number;
// }

export const UserInfoContext = createContext(
  {} as {
    userInfo: User[];
    setUserInfo:  React.Dispatch<React.SetStateAction<User[]>>;
  }
);

export const UserInfoProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState([]);
  console.log(setUserInfo)
  // const userInfo = useMemo(() => ({ setUserInfo }), []);
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};



