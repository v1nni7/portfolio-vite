import { Formik } from "formik";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BoxLogin, Button, SectionLogin, FormGroup, TitleLogin } from "../styles/login.styles";
import { fakeAuthProvider, useAuth } from "../hooks/auth";

const Login = () => {

    window.onload = () => {

        const formControl = document.querySelectorAll('.form-control');

        formControl.forEach(el => {
            el.addEventListener('focus', () => {
                el.parentElement?.querySelector('.form-label')?.classList.replace('unfocused', 'focus');
            });

            el.addEventListener('blur', () => {
                var inputValue = (el as HTMLInputElement).value
                if (!inputValue) {
                    el.parentElement?.querySelector('.form-label')?.classList.replace('focus', 'unfocused');
                } else {
                    el.parentElement?.querySelector('.form-label')?.classList.replace('unfocused', 'focus');
                }
            })
        });

    }

    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || '/portfolio';

    function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get('username') as string;

        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    }
    
    console.log(auth);

    return (
        <>
            <SectionLogin>
                <BoxLogin>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={handleSubmitForm}
                    >
                        {({
                            handleSubmit,
                            values,
                            setFieldValue,
                            handleChange,
                            handleBlur
                        }) => (
                            <>
                                <TitleLogin>Login</TitleLogin>
                                <form onSubmit={handleSubmit}>
                                    <FormGroup className="form-group">
                                        <label htmlFor="email" className="form-label unfocused">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            autoComplete="current-email"
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}

                                        />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <label htmlFor="password" className="form-label unfocused">Senha</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="form-control"
                                            autoComplete="current-password"
                                            onChange={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button type="submit">Entrar</Button>
                                    </FormGroup>
                                </form>
                            </>
                        )}

                    </Formik>
                </BoxLogin>
            </SectionLogin>
        </>
    )
}

export default Login;

