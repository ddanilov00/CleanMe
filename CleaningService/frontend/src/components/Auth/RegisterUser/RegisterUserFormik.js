import React from "react";
import { Formik } from "formik";
import RegisterSchema from "./RegisterUserSchema";
import RegisterUserForm from "./RegisterUserForm";
import AuthPage from "../AuthComponent";

export default function RegisterComponentFormik(props) {
	return (
		<AuthPage
			title="Регистрация пользователя"
			titleDown="Уже зарегистрированы?"
			link="/login"
			nameAction="Войти"
			otherRegisterLink="/register-company"
			otherRegisterText="Зарегистрировать компанию"
		>
			<Formik
				initialValues={{
					firstname: "",
					surname: "",
					email: "",
					password: "",
					confirmPassword: "",
					phoneNumber: ""
				}}
				validationSchema={RegisterSchema}
				onSubmit={values => {
					const { confirmPassword, ...user } = values;
					props.registerUser(user, props.history);
				}}
				render={formProps => <RegisterUserForm {...formProps} {...props} />}
			/>
		</AuthPage>
	);
}
