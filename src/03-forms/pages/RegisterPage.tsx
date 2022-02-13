import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    repeatPassword,
    handleChange,
    reset,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, password, repeatPassword });
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleChange}
          name="name"
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es requerido</span>}
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          name="email"
          className={`${!isValidEmail(email.trim()) && 'has-error'}`}
        />
        {!isValidEmail(email.trim()) && <span>Ingresa un correo válido</span>}
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <input
          type="password"
          value={repeatPassword}
          placeholder="Repeat Password"
          onChange={handleChange}
          name="repeatPassword"
        />
        <button type="submit">Create</button>
        <button type="button" onClick={reset}>
          Clear form
        </button>
      </form>
    </div>
  );
};
