import { string, object, ref } from "yup";

const UserSchema = object().shape({
  firstname: string()
    .required("Обязательное поле")
    .min(3)
    .max(20),
  surname: string()
    .required("Обязательное поле")
    .min(4)
    .max(20),
  email: string().email().required("Обязательное поле"),
  phoneNumber: string()
    .matches(/^\+7(999|902|913|923)\d{7}$/, "Номер должен начинаться, как +79029585642")
    .when("email", {
      is: "",
      then: string().required("Введите email или номер телефона")
    }),
  password: string()
    .required("Введите пароль")
    .min(6)
    .max(30)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, "Пароль должен содержать заглавные и строчные буквы, цифры и состоять не менее, чем из 6 символов"),
  confirmPassword: string()
    .required("Подтверждение пароля")
    .oneOf([ref("password"), null], "Пароли не совпадают")
});

export default UserSchema;
