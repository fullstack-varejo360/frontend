import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterData, schemaRegister } from "../../validators/userValidator";
import { StyledRegister } from "./style";
import { useUser } from "../../hooks/useUser";

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
    resolver: zodResolver(schemaRegister),
  });

  const { userCreate, goToLogin } = useUser();

  return (
    <StyledRegister>
      <h2>Cadastrar</h2>

      <form onSubmit={handleSubmit(userCreate)}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome..." {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu e-mail..." {...register("email")} />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")} />
        {errors.password?.message && <p>{errors.password?.message}</p>}
        <button type="submit">CADASTRAR</button>
        <p>Jápossui uma conta?</p>
        <button className="register" type="button" onClick={() => goToLogin()}>
          Página de Login
        </button>
      </form>
    </StyledRegister>
  );
};
