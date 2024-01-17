import { ReactNode } from "react";
import { TLoginData } from "../validators/userValidator";

export interface UserProviderProps {
    children: ReactNode;
  }
  
  export interface IUser {
    id: number;
    name: string;
    email: string;
    enabled: boolean;
    authorities: null;
    username: string;
    accountNonLocked:boolean;
    accountNonExpired:boolean;
    credentialsNonExpired:boolean;
  }
  
  export interface LoginResponse {
    token: string;
  }
  
  export interface UserContextValues {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    userLogin: (data: TLoginData) => Promise<void>;
    userProfile: () => Promise<void>;
    userLogout: () => void;
  }