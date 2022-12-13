import { string, object, ref, number, array } from "yup";

const CompanySchema = object().shape({
  name: string()
    .required("Обязательное поле")
    .min(4)
    .max(50),
  description: string()
    .required("Обязательное поле")
    .min(50)
    .max(500),
  email: string("Обязательное поле")
    .required()
    .email(),
  address: object().shape({
    country: string().required("Обязательное поле"),
    city: string().required("Обязательное поле"),
    other: string().required("Обязательное поле")
  }),
  password: string()
    .required("Обязательное поле")
    .min(6)
    .max(30)
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
      "Пароль должен содержать заглавные и строчные буквы, цифры и состоять не менее, чем из 6 символов"
    ),
  confirmPassword: string()
    .required("Обязательное поле")
    .oneOf([ref("password"), null], "Пароли не совпадают"),
  rooms: object().shape({
    standart: object().shape({
      price: number()
        .required()
        .min(0),
      time: number()
        .required()
        .min(0)
    }),
    big: object().shape({
      price: number()
        .required()
        .min(0),
      time: number()
        .required()
        .min(0)
    }),
    toilet: object().shape({
      price: number()
        .required()
        .min(0),
      time: number()
        .required()
        .min(0)
    })
  }),
  services: array()
    .of(
      object().shape({
        name: string().required(),
        coefficient: number().required()
      })
    )
    .min(1)
    .required()
});

export default CompanySchema;
