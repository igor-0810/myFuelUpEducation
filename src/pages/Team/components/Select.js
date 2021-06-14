import React from 'react'
import PropTypes from 'prop-types'
import Reactselect from 'react-select'

const Select = ({ options, onChange, placeholder }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'lightgray',
    }),
    indicatorSeparator: (provided, state) => ({
      backgroundColor: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      marginRight: '15px',
    }),
    dropdownIndicator: (providedm, state) => ({
      display: 'flex',
      color: 'darkslategray',
    }),
    placeholder: (provided, state) => ({
      color: 'darkslategray',
    }),
  }

  return (
    <Reactselect
      styles={customStyles}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}
export default Select
