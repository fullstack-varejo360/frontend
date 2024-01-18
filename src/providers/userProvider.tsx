import { createContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  TLoginData,
  TRegisterData,
  TUserUpdate,
} from "../validators/userValidator";
import { IUser, UserContextValues, UserProviderProps } from "./@types";

interface LoginResponse {
  token: string;
}

export const UserContext = createContext({} as UserContextValues);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [modal, showModal] = useState<String | null>(null);

  const token = localStorage.getItem("@Varejo360:TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@Varejo360:TOKEN");

    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  const userProfile = async () => {
    const token = localStorage.getItem("@Varejo360:TOKEN");
    if (token) {
      try {
        const response = await api.get(`/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        localStorage.setItem("@Varejo360:userID", response.data.id);
        navigate("/dashboard");
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
      localStorage.setItem("@Varejo360:TOKEN", token);
      toast.success("Login com sucesso");
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

  const userCreate = async (data: TRegisterData) => {
    try {
      const response = await api.post<IUser>("/users", data);
      console.log(response.data);

      toast.success("Cadastro com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const userUpdate = async (userId: number, data: TUserUpdate) => {
    if (token) {
      try {
        const response = await api.put<IUser>(`/users/${userId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        toast.success("Atualização com sucesso");
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  const userDelete = async (userId: number) => {
    if (token) {
      try {
        const response = await api.delete<void>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        toast.success("Usuário deletado");

        localStorage.removeItem("@Varejo360:TOKEN");
        localStorage.removeItem("@Varejo360:ID");
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  useEffect(() => {
    userProfile();
  }, [token]);

  const goToRegister = () => {
    navigate("/register");
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        navigate,
        token,
        user,
        setUser,
        modal,
        showModal,
        userLogin,
        userProfile,
        userLogout,
        userCreate,
        userUpdate,
        userDelete,
        goToRegister,
        goToLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
