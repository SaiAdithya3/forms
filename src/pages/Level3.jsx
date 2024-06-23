import React, { useState, useEffect } from 'react';
import useForm3 from '../hooks/useForm3';
import axios from 'axios';
import InputField from '../components/InputField';
import { toast } from 'sonner';

const Level3 = ({ onSubmit }) => {
  const { values, errors, handleChange, handleSubmit } = useForm3(submitForm);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=4');
        console.log('Questions fetched successfully:', response.data);
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
        toast.error('Failed to fetch questions');
      }
    };

    fetchQuestions();
  }, []);

  function submitForm() {
    console.log(values);
    toast.success('Form submitted successfully');
    if (onSubmit) onSubmit(values); // Call onSubmit callback if provided
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
      <InputField
        id="fullName"
        type="text"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        label="Full Name"
      />
      {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}

      <InputField
        id="email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email"
        label="Email"
      />
      {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surveyTopic">
          Survey Topic
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="surveyTopic"
          name="surveyTopic"
          value={values.surveyTopic}
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
        <>
          <InputField
            id="favoriteLanguage"
            type="text"
            name="favoriteLanguage"
            value={values.favoriteLanguage}
            onChange={handleChange}
            placeholder="Enter your favorite programming language"
            label="Favorite Programming Language"
          />
          {errors.favoriteLanguage && <p className="text-red-500 text-xs italic">{errors.favoriteLanguage}</p>}

          <InputField
            id="experience"
            type="number"
            name="experience"
            value={values.experience}
            onChange={handleChange}
            placeholder="Enter your years of experience"
            label="Years of Experience"
          />
          {errors.experience && <p className="text-red-500 text-xs italic">{errors.experience}</p>}
        </>
      )}

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
              value={values.exerciseFrequency}
              onChange={handleChange}
              required
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            {errors.exerciseFrequency && (
              <p className="text-red-500 text-xs italic">{errors.exerciseFrequency}</p>
            )}
          </div>

          <InputField
            id="dietPreference"
            type="text"
            name="dietPreference"
            value={values.dietPreference}
            onChange={handleChange}
            placeholder="Enter your diet preference"
            label="Diet Preference"
          />
          {errors.dietPreference && <p className="text-red-500 text-xs italic">{errors.dietPreference}</p>}
        </>
      )}

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
              value={values.qualification}
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

          <InputField
            id="fieldOfStudy"
            type="text"
            name="fieldOfStudy"
            value={values.fieldOfStudy}
            onChange={handleChange}
            placeholder="Enter your field of study"
            label="Field of Study"
          />
          {errors.fieldOfStudy && <p className="text-red-500 text-xs italic">{errors.fieldOfStudy}</p>}
        </>
      )}

      {questions && questions.length > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalQuestions">
            Additional Questions
          </label>
          <ul>
            {questions.map((question, index) => (
              <li key={index} className="mb-2">
                {question.question}
                <input
                  type="text"
                  name={`additionalQuestions[${index}]`}
                  value={values.additionalQuestions && values.additionalQuestions[index] || ''}
                  onChange={(e) => handleChange(e, index)}
                  className="mt-2 p-2 border rounded"
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
          Feedback
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feedback"
          name="feedback"
          value={values.feedback}
          onChange={handleChange}
          required
          placeholder="Provide your feedback (minimum 50 characters)"
          minLength="50"
        />
        {errors.feedback && <p className="text-red-500 text-xs italic">{errors.feedback}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default Level3;
