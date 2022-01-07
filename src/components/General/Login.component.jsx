import React, { useState } from 'react';
import styles from './styles/Login.module.css';

const formStyles = 'flex flex-col justify-center items-center space-y-3 mb-4';

const inputGroup = 'relative';

const inputStyles =
  'p-4 pb-2 bg-transparent outline-none border-0 border-b-2 border-green-700 focus:border-b-3 focus:outline-none focus:ring-0 focus:border-red-500 transition-border duration-300';

const labelStyles = `absolute text-xs -top-1 text-gray-600 dark:text-gray-300`;

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {};

  const { email, password } = values;

  return (
    <form className={`${formStyles + ' ' + styles.parent}`}>
      <div className={inputGroup}>
        <label className={labelStyles} htmlFor="email">
          Email
        </label>
        <input
          className={`${inputStyles}`}
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className={inputGroup}>
        <label className={labelStyles} htmlFor="password">
          Password
        </label>
        <input
          className={inputStyles}
          name="password"
          type="password"
          id="password"
          onChange={handleChange}
          value={password}
        />
      </div>
    </form>
  );
};

export default Login;
