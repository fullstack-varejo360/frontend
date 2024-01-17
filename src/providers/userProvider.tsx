//userProvider.tsx

import {
  createContext,
  useEffect /*, useState*/,
  useState,
} from "react";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TLoginData } from "../validators/userValidator";
import { IUser, UserContextValues, UserProviderProps } from "./@types";

interface LoginResponse {
  token: string;
}

export const UserContext = createContext({} as UserContextValues);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  // const token = localStorage.getItem("@Varejo360:TOKEN");

  const navigate = useNavigate()

  const token = localStorage.getItem("Varejo360:TOKEN");
  useEffect(() => {
    const token = localStorage.getItem("Varejo360:TOKEN");

    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    userProfile()
  }, [token]);

  const userProfile = async () => {
    const token = localStorage.getItem("@Varejo360:TOKEN");
    if (token) {
      try {
        const response = await api.get(`/users/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        console.log(response.data)
        localStorage.setItem("@Varejo360:userID", response.data.id);
        navigate("/dashboard");
        console.log("cheguei")
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post<LoginResponse>("login", data);

      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("Varejo360:TOKEN", token);
      toast.success("Login com sucesso");
      
      console.log(token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Dados email/senha inválida");
    }
  };

  

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Varejo360:TOKEN");
    localStorage.removeItem("@Varejo360:userID");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, userLogin, userProfile, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
