import { useFormik, FormikErrors } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = 'Required';
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
    if (!lastName) {
      errors.lastName = 'Required';
    } else if (lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less';
    }
    if (!email) {
      errors.email = 'Required';
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1>Formik basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <span>First name is required</span>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <span>Last name is required</span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <button type="submit">Submit</button>
        <span>E-mail is required</span>
        <span>Check for a valid email format</span>
      </form>
    </div>
  );
};
