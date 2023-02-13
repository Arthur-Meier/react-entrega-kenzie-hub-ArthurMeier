import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { api } from "../../sevices/api";
import { Navbar } from "../../components/Navbar";
import { StyledMain } from "./style";

const RegisterPage = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio").email("email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
        "Sua senha deve conter ao menos 1 letra maiuscula, 1 letra minuscula, um numero e um caracter especial"
      ),
    confirmedPassword: yup
      .string()
      .required("Necessário confirmar a senha")
      .oneOf([yup.ref("password")], "As senhas nao correspondem"),
    bio: yup.string().required("Bio obrigatoria"),
    contact: yup.string().required("Contato obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const registerUser = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitFunction = (data) => {
    registerUser(data);
  };

  return (
    <>
      <StyledMain>
        <Navbar name="Voltar" />
        <div>
          <h1>Crie sua conta</h1>
          <span>Rapido e grátis, vamos nessa</span>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              Label="Nome"
              type="text"
              placeholder="Digite aqui seu nome"
              register={register("name")}
              error={errors.name}
            />

            <Input
              Label="Email"
              type="email"
              placeholder="Digite aqui seu email"
              register={register("email")}
              error={errors.email}
            />

            <Input
              Label="Senha"
              type="password"
              placeholder="Digite aqui sua senha"
              register={register("password")}
              error={errors.password}
            />

            <Input
              Label="Confirmar Senha"
              type="password"
              placeholder="Digite novamente sua senha"
              register={register("confirmedPassword")}
              error={errors.confirmedPassword}
            />

            <Input
              Label="Bio"
              type="text"
              placeholder="Fale sobre você"
              register={register("bio")}
              error={errors.bio}
            />

            <Input
              Label="Contato"
              type="text"
              placeholder="Opção de contato"
              register={register("contact")}
              error={errors.contact}
            />

            <fieldset>
              <label htmlFor="">Selecionar módulo</label>
              <select name="course_module" id="" {...register("course_module")}>
                <option value="Primeiro Módulo">Primeiro Módulo</option>
                <option value="Segundo Módulo">Segundo Módulo</option>
                <option value="Terceiro Módulo">Terceiro Módulo</option>
                <option value="Quarto Módulo">Quarto Módulo</option>
                <option value="Quinto Módulo">Quinto Módulo</option>
                <option value="Sexto Módulo">Sexto Módulo</option>
              </select>
            </fieldset>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </StyledMain>
    </>
  );
};

export default RegisterPage;
