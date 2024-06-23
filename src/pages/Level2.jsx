import React from 'react';
import useForm2 from '../hooks/useForm2';
import { toast } from 'sonner';
import InputField from '../components/InputField';

const Level2 = () => {
  const { values, errors, handleChange, handleSubmit } = useForm2(submitForm);

  function submitForm() {
    console.log(values);
    toast.success('Form submitted successfully');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-8 items-center justify-center">
      <h1 className='text-3xl w-full px-20 text-center font-semibold'> Job Application Form</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <InputField
          id="fullName"
          label="Full Name"
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
          placeholder="Enter your full name"
        />
        
        <InputField
          id="email"
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />
        
        <InputField
          id="phoneNumber"
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          placeholder="Enter your phone number"
        />
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applyingForPosition">
            Applying for Position
          </label>
          <select
            className={`shadow appearance-none border ${errors.applyingForPosition ? 'border-red-500' : 'border-gray-200'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="applyingForPosition"
            name="applyingForPosition"
            value={values.applyingForPosition || ''}
            onChange={handleChange}
          >
            <option value="">Select a position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.applyingForPosition && <p className="text-red-500 text-xs italic">{errors.applyingForPosition}</p>}
        </div>

        {(values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && (
          <InputField
            id="relevantExperience"
            label="Relevant Experience (years)"
            type="number"
            name="relevantExperience"
            value={values.relevantExperience}
            onChange={handleChange}
            error={errors.relevantExperience}
            placeholder="Enter relevant experience"
          />
        )}

        {values.applyingForPosition === 'Designer' && (
          <InputField
            id="portfolioURL"
            label="Portfolio URL"
            type="url"
            name="portfolioURL"
            value={values.portfolioURL}
            onChange={handleChange}
            error={errors.portfolioURL}
            placeholder="Enter portfolio URL"
          />
        )}

        {values.applyingForPosition === 'Manager' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="managementExperience">
              Management Experience
            </label>
            <textarea
              className={`shadow appearance-none border ${errors.managementExperience ? 'border-red-500' : 'border-gray-200'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="managementExperience"
              name="managementExperience"
              value={values.managementExperience || ''}
              onChange={handleChange}
              required={values.applyingForPosition === 'Manager'}
              placeholder="Enter management experience"
              rows={4}
            />
            {errors.managementExperience && <p className="text-red-500 text-xs italic">{errors.managementExperience}</p>}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Additional Skills</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-700"
                name="additionalSkills"
                value="JavaScript"
                onChange={handleChange}
              />
              <span className="ml-2">JavaScript</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-700"
                name="additionalSkills"
                value="CSS"
                onChange={handleChange}
              />
              <span className="ml-2">CSS</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-700"
                name="additionalSkills"
                value="Python"
                onChange={handleChange}
              />
              <span className="ml-2">Python</span>
            </label>
          </div>
          {errors.additionalSkills && <p className="text-red-500 text-xs italic">{errors.additionalSkills}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredInterviewTime">
            Preferred Interview Time
          </label>
          <input
            className={`shadow appearance-none border ${errors.preferredInterviewTime ? 'border-red-500' : 'border-gray-200'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="preferredInterviewTime"
            type="datetime-local"
            name="preferredInterviewTime"
            value={values.preferredInterviewTime || ''}
            onChange={handleChange}
          />
          {errors.preferredInterviewTime && <p className="text-red-500 text-xs italic">{errors.preferredInterviewTime}</p>}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Level2;
