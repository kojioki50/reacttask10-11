import { createContext, ReactNode, useState } from 'react'
import { User } from '../types/type1'

export const UserInfoContext = createContext<any>({})

export const UserInfoProvider = (props:{children: ReactNode}) => {
  const { children } = props

  const [userInfo, setUserInfo] = useState<User[]>([])
  // const userInfo = useMemo(() => ({ setUserInfo }), []);
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}
