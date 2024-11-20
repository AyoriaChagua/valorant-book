import React, { useState } from 'react';

interface Props {
  readonly label: string;
  readonly options: string[];
  readonly handleFilter: (value: string) => void;
}

export default function SelectInput({ options , label, handleFilter}: Props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedOption(value);
    handleFilter(value);
  };

  return (
    <div>
      <label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FE4754]">{label}</label>

      <select
        id="roles"
        value={selectedOption}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#FE4754] dark:focus:ring-red-400 dark:focus:border-red-400"
      >
        <option value="">Choose a role</option>
        {options.map((option) => option && (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}