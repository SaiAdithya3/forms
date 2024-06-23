import React, { useEffect } from 'react';
import useForm3 from '../hooks/useForm3';
import axios from 'axios';

const Step3 = ({ onSubmit }) => {
  const { values, errors, handleChange, handleSubmit, setValues } = useForm3((data) => {
    onSubmit(data);
  });

  useEffect(() => {
    if (values.surveyTopic) {
      fetchAdditionalQuestions(values.surveyTopic);
    }
  }, [values.surveyTopic]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await axios.get(`https://api.example.com/questions?topic=${topic}`);
      // Assuming the response contains an array of questions
      const questions = response.data;
      setValues((prevValues) => ({
        ...prevValues,
        additionalQuestions: questions,
      }));
    } catch (error) {
      console.error('Error fetching additional questions:', error);
      // Handle error notification here (e.g., toast.error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
          Feedback
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feedback"
          name="feedback"
          value={values.feedback || ''}
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

export default Step3;
