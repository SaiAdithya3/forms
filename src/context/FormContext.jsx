import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the form
const initialState = {
  fullName: '',
  email: '',
  surveyTopic: '',
  favoriteProgrammingLanguage: '',
  yearsOfExperience: '',
  exerciseFrequency: '',
  dietPreference: '',
  highestQualification: '',
  fieldOfStudy: '',
  feedback: '',
  additionalQuestions: [],
  currentStep: 1,
  totalSteps: 3, // Adjust based on the number of steps in your form
};

// Reducer function to manage state updates
const formReducer = (state, action) => {
  switch (action.type) {
    case 'updateField':
      return { ...state, [action.fieldName]: action.payload };
    case 'updateAdditionalQuestions':
      return { ...state, additionalQuestions: action.payload };
    case 'nextStep':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'prevStep':
      return { ...state, currentStep: state.currentStep - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const FormContext = createContext();

// Custom hook to use the form context
export const useFormContext = () => {
  return useContext(FormContext);
};

// Form context provider component
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};
