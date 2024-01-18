//pages>login>index.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledLogin } from "./style";
import { TLoginData, schemaLogin } from "../../validators/userValidator";
import { useUser } from "../../hooks/useUser";


export const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<TLoginData>({
        resolver: zodResolver(schemaLogin)
    })

    const {userLogin, goToRegister} = useUser()


  return (
    <StyledLogin>

      <h1>Varejo360</h1>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(userLogin)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email"{...register("email")}/>
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha"{...register("password")}/>
        {errors.password?.message && <p>{errors.password?.message}</p>}

        <button type="submit">Entrar</button>
      </form>
      <div>
        <h3>Crie uma conta,</h3>
        <span><h3 onClick={()=>goToRegister()}>Cadastro</h3></span>
      </div>
    </StyledLogin>
  );
};






