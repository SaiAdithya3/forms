import React from 'react';
import useForm from '../hooks/useForm'; 
import { toast } from 'sonner';
import EventRegistrationForm from '../components/forms/EventRegistrationForm';

const Level1 = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    console.log(values); 
    toast.success('Form submitted successfully');
  }

  return (
    <div className="min-h-screen bg-zinc-100 w-full flex flex-col gap-10 items-center py-28">
      <h1 className='text-3xl w-full px-20 text-start font-semibold'>Event Registration Form</h1>
      <EventRegistrationForm
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Level1;
