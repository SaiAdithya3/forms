import React from 'react';
import useForm from '../hooks/useForm';
import InputField from './InputField';

const Step1 = ({ onNext }) => {
  const { values, errors, handleChange, handleSubmit } = useForm((data) => {
    onNext(data);
  });

  return (
    <form onSubmit={handleSubmit}>

      <InputField
        id="fullName"
        type="text"
        name="fullName"
        value={values.fullName || ''}
        onChange={handleChange}
        placeholder="Enter your full name"
        label="Full Name"
      />
      {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}

      <InputField
        id="email"
        type="email"
        name="email"
        value={values.email || ''}
        onChange={handleChange}
        placeholder="Enter your email"
        label="Email"
      />
      {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}



    </form>
  );
};

export default Step1;
