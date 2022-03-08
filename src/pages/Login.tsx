import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BoxLogin, Button, SectionLogin, FormGroup, TitleLogin, CheckInput } from "../styles/login.styles";
import { fakeAuthProvider, useAuth } from "../hooks/auth";
import * as Yup from 'yup';
import api from "../services/api";
import { getCookie, setCookie } from "../hooks/cookies";

const Login = () => {

    window.onload = () => {

        const formControl = document.querySelectorAll('.form-control');
        const checkStayConnected = document.querySelector('#stayConnectedCheckbox');

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

        checkStayConnected?.addEventListener('click', () => {
            checkStayConnected.setAttribute('value', 'true');
        });

    }

    const displayError = (err: string) => {
        var error = document.querySelector('.error');
        var textError = document.querySelector('.error h5');

        error?.classList.add('show');
        textError?.append(err);
    }

    let navigate = useNavigate();
    let auth = useAuth();

    let from = '/portfolio';

    const handleLogin = useCallback(async (data?) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email(() => console.log('Email inválido!')).required(() => { console.log('Informe se email para prosseguir!') }),
                password: Yup.string().required(() => console.log('Insira sua senha para prosseguir!')),
            });

            await schema.validate(data);

            const response = await api.post('/login', data);

            if (response.data.error) {
                displayError(response.data.error);
            } else {
                if (response.data) {
                    if (data.stayConnected == true) {
                        
                        

                       /*  setCookie('loggedin', response.data.auth, ctemp) */
                    }
                    let email: string = response.data.email

                    /* auth.signin(email, () => {
                        navigate(from, { replace: true });
                    }); */

                }
            }

        } catch (error) {

        }
    }, []);

    interface FormValues {
        email: string,
        password: string,
        stayConnected: string,
    }

    const initialValues: FormValues = {
        email: '',
        password: '',
        stayConnected: 'false',
    }

    return (
        <>
            <SectionLogin>
                <BoxLogin>
                    <TitleLogin>Login</TitleLogin>
                    <div className="error">
                        <h5></h5>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={handleLogin}
                    >
                        {({ handleSubmit, values, setFieldValue, handleChange, handleBlur }) => (
                            <>
                                <Form>
                                    <FormGroup>
                                        <label htmlFor="email" className="form-label unfocused">Email</label>
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="text"
                                            id="email"
                                            autoComplete="current-email"
                                            onChange={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="password" className="form-label unfocused">Senha</label>
                                        <input
                                            className="form-control"
                                            name="password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <CheckInput
                                            type="checkbox"
                                            value={values.stayConnected}
                                            onChange={handleChange('stayConnected')}
                                            id="stayConnectedCheckbox"
                                        />
                                        <label htmlFor="stayConnectedCheckbox">Mantenha-me conectado</label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button
                                            type="submit">Acessar</Button>
                                    </FormGroup>
                                </Form>
                            </>

                        )}
                    </Formik>
                </BoxLogin>
            </SectionLogin>
        </>
    )
}

export default Login;

