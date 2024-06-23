import React from 'react';

const CheckboxField = ({ label, checked, onChange, name }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      <input
        className="mr-2 leading-tight"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm">{label}</span>
    </label>
  </div>
);

export default CheckboxField;
