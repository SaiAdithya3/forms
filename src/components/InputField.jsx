import React from 'react';

const InputField = ({ id, label, type, value, onChange, error, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      className={`shadow appearance-none focus:ring-2 border ${error ? 'border-red-500' : 'border-gray-200'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      id={id}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-xs italic">{error}</p>}
  </div>
);

export default InputField;
