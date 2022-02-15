import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('requerido'),
          lastName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('requerido'),
          email: Yup.string()
            .email('Ingresa un email válido')
            .required('Requerido'),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage component="span" name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage component="span" name="lastName" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <ErrorMessage component="span" name="email" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
