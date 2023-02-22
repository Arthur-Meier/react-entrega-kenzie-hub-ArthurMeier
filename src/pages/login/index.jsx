import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/Input";
import * as yup from "yup";
import { StyledDiv } from "./style";
import Logo from "../../assets/Logo.svg";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();

  const { loginUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("/LandingPage");
    }
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const goToLanding = (data) => {
    loginUser(data);
    navigate("/LandingPage");
  };

  return (
    <StyledDiv>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(goToLanding)}>
          <Input
            Label="Email"
            type="email"
            placeholder="Seuemail@email.com"
            register={register("email")}
            error={errors.email}
          />
          <Input
            Label="Senha"
            type="password"
            placeholder="******"
            register={register("password")}
            error={errors.password}
          />
          <button type="submit">Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Link to="/Register">Cadastre-se</Link>
      </div>
    </StyledDiv>
  );
};

export default LoginPage;
