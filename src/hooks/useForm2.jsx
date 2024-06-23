import { useState } from 'react';
import { toast } from 'sonner';

const useForm2 = (callback) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingForPosition: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? [...values[name], value] : value;

    setValues({
      ...values,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    toast.error('Error submitting form. Please check for errors.');

    if (Object.keys(validationErrors).length === 0) {
      callback();
      resetForm();
    }
  };

  const validate = (values) => {
    let errors = {};

    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (isNaN(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a number';
    }

    if (!values.applyingForPosition) {
      errors.applyingForPosition = 'Applying for Position is required';
    }

    if (values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') {
      if (!values.relevantExperience) {
        errors.relevantExperience = 'Relevant Experience is required';
      } else if (isNaN(values.relevantExperience) || parseInt(values.relevantExperience) <= 0) {
        errors.relevantExperience = 'Relevant Experience must be a number greater than 0';
      }
    }

    if (values.applyingForPosition === 'Designer') {
      if (!values.portfolioURL) {
        errors.portfolioURL = 'Portfolio URL is required';
      } else if (!isValidURL(values.portfolioURL)) {
        errors.portfolioURL = 'Portfolio URL is not valid';
      }
    }

    if (values.applyingForPosition === 'Manager') {
      if (!values.managementExperience) {
        errors.managementExperience = 'Management Experience is required';
      }
    }

    if (values.additionalSkills.length === 0) {
      errors.additionalSkills = 'Please select at least one Additional Skill';
    }

    if (!values.preferredInterviewTime) {
      errors.preferredInterviewTime = 'Preferred Interview Time is required';
    } else if (new Date(values.preferredInterviewTime) < new Date()) {
      errors.preferredInterviewTime = 'Preferred Interview Time must be in the future';
    }

    return errors;
  };

  const resetForm = () => {
    setValues({
      fullName: '',
      email: '',
      phoneNumber: '',
      applyingForPosition: '',
      relevantExperience: '',
      portfolioURL: '',
      managementExperience: '',
      additionalSkills: [],
      preferredInterviewTime: '',
    });

    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export default useForm2;
