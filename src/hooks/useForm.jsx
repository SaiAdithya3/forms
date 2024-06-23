import { useState } from 'react';
import { toast } from 'sonner';

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues({
      ...values,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation logic
    const validationErrors = validate(values);
    setErrors(validationErrors);
  
    // If no validation errors, invoke callback
    if (Object.keys(validationErrors).length === 0) {
      callback();
  
      // Clear form values after successful submission
      setValues({});
    }
  };
  

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
      toast.error('Name is required');
    }

    if (!values.email) {
      errors.email = 'Email is required';
      toast.error('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
      toast.error('Email address is invalid');
    }

    if (!values.age) {
      errors.age = 'Age is required';
      toast.error('Age is required');
    } else if (isNaN(values.age) || parseInt(values.age) <= 0) {
      errors.age = 'Age must be a number greater than 0';
      toast.error('Age must be a number greater than 0');
    }

    if (values.isAttendingWithGuest && !values.guestName) {
      errors.guestName = 'Guest Name is required';
      toast.error('Guest Name is required');
    }

    return errors;
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
