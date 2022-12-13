import { string, object } from "yup";

const SignInSchema = object().shape({
  email: string()
    .email()
    .required("Введите email"),
  password: string().required("Введите пароль")
});

export default SignInSchema;
