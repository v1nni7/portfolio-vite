import { Form, Formik } from "formik";
import { useCallback } from "react";
import { BoxLogin, FormGroup, SectionLogin, TitleLogin } from "../styles/login.styles";

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
            <SectionLogin>
                <BoxLogin>
                    <TitleLogin>Cadastrar</TitleLogin>
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
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <input className='form-control' type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="text" />
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

export default Register;