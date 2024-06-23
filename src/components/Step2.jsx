import React from 'react';
import useForm from '../hooks/useForm';

const Step2 = ({ onNext }) => {
  const { values, errors, handleChange, handleSubmit } = useForm((data) => {
    onNext(data);
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surveyTopic">
          Survey Topic
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="surveyTopic"
          name="surveyTopic"
          value={values.surveyTopic || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select a topic</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && <p className="text-red-500 text-xs italic">{errors.surveyTopic}</p>}
      </div>

      {values.surveyTopic === 'Technology' && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="favoriteLanguage">
            Favorite Programming Language
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="favoriteLanguage"
            name="favoriteLanguage"
            value={values.favoriteLanguage || ''}
            onChange={handleChange}
            required
          >
            <option value="">Select a language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
          </select>
          {errors.favoriteLanguage && <p className="text-red-500 text-xs italic">{errors.favoriteLanguage}</p>}
        </div>
      )}

      {values.surveyTopic === 'Technology' && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
            Years of Experience
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experience"
            type="number"
            name="experience"
            value={values.experience || ''}
            onChange={handleChange}
            required
            placeholder="Enter your years of experience"
          />
          {errors.experience && <p className="text-red-500 text-xs italic">{errors.experience}</p>}
        </div>
      )}

      {/* Health Section Fields */}
      {values.surveyTopic === 'Health' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exerciseFrequency">
              Exercise Frequency
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="exerciseFrequency"
              name="exerciseFrequency"
              value={values.exerciseFrequency || ''}
              onChange={handleChange}
              required
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            {errors.exerciseFrequency && <p className="text-red-500 text-xs italic">{errors.exerciseFrequency}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dietPreference">
              Diet Preference
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dietPreference"
              name="dietPreference"
              value={values.dietPreference || ''}
              onChange={handleChange}
              required
            >
              <option value="">Select preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            {errors.dietPreference && <p className="text-red-500 text-xs italic">{errors.dietPreference}</p>}
          </div>
        </>
      )}

      {/* Education Section Fields */}
      {values.surveyTopic === 'Education' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
              Highest Qualification
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="qualification"
              name="qualification"
              value={values.qualification || ''}
              onChange={handleChange}
              required
            >
              <option value="">Select qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.qualification && <p className="text-red-500 text-xs italic">{errors.qualification}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fieldOfStudy">
              Field of Study
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fieldOfStudy"
              type="text"
              name="fieldOfStudy"
              value={values.fieldOfStudy || ''}
              onChange={handleChange}
              required
              placeholder="Enter your field of study"
            />
            {errors.fieldOfStudy && <p className="text-red-500 text-xs italic">{errors.fieldOfStudy}</p>}
          </div>
        </>
      )}

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Next
      </button>
    </form>
  );
};

export default Step2;
