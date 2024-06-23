import React from 'react';
import InputField from '../InputField';
import CheckboxField from '../CheckboxField';

const EventRegistrationForm = ({ values, errors, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 w-1/3 pt-6 pb-8 mb-4">
    <InputField
      id="name"
      label="Name"
      type="text"
      value={values.name || ''}
      onChange={handleChange}
      error={errors.name}
      placeholder="Enter your name"
    />
    <InputField
      id="email"
      label="Email"
      type="email"
      value={values.email || ''}
      onChange={handleChange}
      error={errors.email}
      placeholder="Enter your email"
    />
    <InputField
      id="age"
      label="Age"
      type="number"
      value={values.age || ''}
      onChange={handleChange}
      error={errors.age}
      placeholder="Enter your age"
    />
    <CheckboxField
      label="Are you attending with a guest?"
      checked={values.isAttendingWithGuest || false}
      onChange={handleChange}
      name="isAttendingWithGuest"
    />
    {values.isAttendingWithGuest && (
      <InputField
        id="guestName"
        label="Guest Name"
        type="text"
        value={values.guestName || ''}
        onChange={handleChange}
        error={errors.guestName}
        placeholder="Enter guest's name"
      />
    )}
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
);

export default EventRegistrationForm;
