import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BoxLogin, Button, SectionLogin, FormGroup, TitleLogin, CheckInput } from "../styles/login.styles";
import { useAuth } from "../hooks/auth";
import * as Yup from 'yup';
import api from "../services/api";
import { getCookie, setCookie } from "../hooks/cookies";

const Login = () => {

    /**
     *  Após o carregamento da página todos os Script da <Login /> são carregados
     *  
     *  Linhas
     *  24 - 40 - Animação dos Labels
     *  42 - 44 - Adicionando Evento de clique na checkbox para alterar seu valor
     *  46 - 50 - Verifica se o usuário está logado e navega até a página /portfolio 
     *  
     */

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

        if (getCookie('loggedin') == 'true') {

            navigate('/portfolio');

        }
    }

    /**
     * 
     *  Essa função tem como principal objetivo pegar o erro da API (@param err)
     *      e exibir esse erro na tela;
     * 
     * @param err 
     */

    const displayError = async (err: string) => {
        const checkErrorMessages = document.querySelectorAll('.error.show');
        const displayMessage = document.querySelector('.error h5') as HTMLElement;

        document.querySelector('.error')?.classList.add('show')
        console.log(checkErrorMessages.length)

        if (checkErrorMessages.length >= 1) {
            displayMessage.innerHTML = err
        } else {
            displayMessage?.append(err);
        }

    }

    /**
     *  Definindo alguns componentes de autenticação e navegação
     */
    let navigate = useNavigate();
    let auth = useAuth();

    let from = '/portfolio';

    /**
     * Essa função tem como objetivo pegar os dados (@param data) inserindo no form e verificar se são válidos
     * após a validação os dados são submetidos para a API onde será executada a rota que verificara se o login é válido.
     * 
     */
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

                    const userID = response.data.id;
                    localStorage.setItem('user_id', userID);

                    if (data.stayConnected == true) {
                        var now = new Date();
                        var time = now.getTime();
                        var expireTime = time + 1000 * 86400 * 90;
                        now.setTime(expireTime)
                        const expire = now.toUTCString()

                        setCookie('loggedin', response.data.auth, expire);
                    }
                    
                    let email: string = response.data.email;

                    setCookie('loggedin', response.data.auth, 'session');

                    auth.signin(email, () => {
                        navigate(from, { replace: true });
                    });
                }
            }

        } catch (error) {

        }
    }, []);

    /**
     * Cria interface para a tipagem dos dados
     * @param string
     */
    interface FormValues {
        email: string,
        password: string,
        stayConnected: string,
    }

    /**
     * Valores iniciais setados para os formulários
     * @param string
     */
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

