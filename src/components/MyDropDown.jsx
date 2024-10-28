import React, { useState } from 'react';
import Select from 'react-select';

const MyComponent = () => {
  const [selectedTaxType, setSelectedTaxType] = useState(null);

  // Transform your options array into { value, label } format
  const options = [
    { value: 'Kinh doanh Online', label: 'Kinh doanh Online' },
    { value: 'Kinh doanh Online và Offline', label: 'Kinh doanh Online và Offline' },
    { value: 'Affiliate Marketing', label: 'Affiliate Marketing' },
    { value: 'Freelancer', label: 'Freelancer' }
  ];

  // Custom styles for the dropdown
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007bff' : 'white',
      color: state.isSelected ? 'white' : '#333',
      padding: 10,
    }),
    control: (provided) => ({
      ...provided,
      padding: '5px',
      fontSize: '14px',
    }),
  };

  // Handle change from the select dropdown
  const handleSelectChange = (selectedOption) => {
    setSelectedTaxType(selectedOption ? selectedOption.value : null);
  };

  return (
    <div>
      {/* Replace the native select with react-select */}
      <Select
        value={options.find(option => option.value === selectedTaxType)}
        onChange={handleSelectChange}
        options={options}
        styles={customStyles}
        placeholder="Nguồn thu nhập đến từ..."
      />
    </div>
  );
};

export default MyComponent;
