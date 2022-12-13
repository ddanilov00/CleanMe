import React from "react";
import { Formik } from "formik";
import SignInSchema from "./SignInSchema";
import SignInForm from "./SignInForm";
import AuthPage from "../AuthComponent";

export default function SignInComponentFormik(props) {
	return (
		<AuthPage
			title="Войти"
			titleDown="Не зарегистрированы?"
			link="/register"
			nameAction="Зарегистрироваться"
		>
			<Formik
				initialValues={{
					email: "",
					password: ""
				}}
				validationSchema={SignInSchema}
				onSubmit={values => {
					const user = values;
					props.loginUser(user, props.history);
				}}
				render={formProps => <SignInForm {...formProps} {...props} />}
			/>
		</AuthPage>
	);
}
