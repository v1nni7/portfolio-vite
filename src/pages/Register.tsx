import { Form, Formik } from "formik";
import { useCallback } from "react";
import { selectThisElement } from "../components/utils/utils";
import { BoxLogin, FormGroup, SectionLogin, TitleLogin } from "../styles/login.styles";
import { BoxRegister, SectionRegister } from "../styles/register.styles";

const Register = () => {

    const handleRegister = useCallback(async () => {
        try {

        } catch (error) {

        }
    }, []);

    interface FormValues {
        fName: string,
        lName: string,
        email: string,
        carrer: string,
        phone: string,
        whatsapp: string,
        location: string,
        password: string,
    }

    const initialValues: FormValues = {
        fName: '',
        lName: '',
        email: '',
        carrer: '',
        phone: '',
        whatsapp: '',
        location: '',
        password: '',
    }

    return (
        <>
            <SectionRegister>
                <BoxRegister>
                    <TitleLogin>Informações Pessoais</TitleLogin>
                    <div className="error">
                        <h5></h5>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={handleRegister}
                    >
                        {({ handleSubmit, values, setFieldValue, handleChange, handleBlur }) => (
                            <>
                                <Form>
                                    <FormGroup>
                                        <label htmlFor="" className="form-label unfocused">Nome</label>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="" className="form-label unfocused">Sobrenome</label>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="" className="form-label unfocused">Email</label>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="" className="form-label unfocused">Celular</label>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="" className="form-label unfocused">Senha</label>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="" className="form-label unfocused">Confirme sua senha</label>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                </Form>
                            </>
                        )}
                    </Formik>
                </BoxRegister>
            </SectionRegister>
        </>
    )
}

export default Register;