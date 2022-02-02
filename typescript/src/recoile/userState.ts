import { atom } from "recoil";
import { User } from "../types/type1";

export const UserState = atom<User[]>({
  key: "USER_STATE",
  default: [],
});
