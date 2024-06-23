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

  const validate = (values) => {
    let errors = {};

    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
      toast.error('Full Name is required');
    }

    if (!values.email) {
      errors.email = 'Email is required';
      toast.error('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
      toast.error('Email address is invalid');
    }

    if (!values.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
      toast.error('Survey Topic is required');
    }

    if (values.surveyTopic === 'Technology') {
      if (!values.favoriteLanguage) {
        errors.favoriteLanguage = 'Favorite Programming Language is required';
        toast.error('Favorite Programming Language is required');
      }
      if (!values.experience) {
        errors.experience = 'Years of Experience is required';
        toast.error('Years of Experience is required');
      }
    }

    if (values.surveyTopic === 'Health') {
      if (!values.exerciseFrequency) {
        errors.exerciseFrequency = 'Exercise Frequency is required';
        toast.error('Exercise Frequency is required');
      }
      if (!values.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
        toast.error('Diet Preference is required');
      }
    }

    if (values.surveyTopic === 'Education') {
      if (!values.qualification) {
        errors.qualification = 'Highest Qualification is required';
        toast.error('Highest Qualification is required');
      }
      if (!values.fieldOfStudy) {
        errors.fieldOfStudy = 'Field of Study is required';
        toast.error('Field of Study is required');
      }
    }

    if (!values.feedback) {
      errors.feedback = 'Feedback is required';
      toast.error('Feedback is required');
    } else if (values.feedback.length < 50) {
      errors.feedback = 'Feedback must be at least 50 characters';
      toast.error('Feedback must be at least 50 characters');
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(values);
      setValues({});
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
