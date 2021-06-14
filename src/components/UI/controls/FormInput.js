/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import styles from './formInput.module.scss'

const customStyles = {
  width: '100%',
  border: 'none',
  height: '30px',
  borderBottom: '1px solid lightgray',
  outline: 'none',
  paddingTop: '10px',
}

const FormInput = ({
  error,
  label,
  id,
  register,
  className,
  asteriskOnInput,
  asteriskPaddingLeft,
  ...inputProps
}) => {
  const [showHideAsterisk, setShowHideAsterisk] = useState(asteriskOnInput)
  const [eyeOnInput, setEyeOninput] = useState()

  const hide = () => {
    setShowHideAsterisk(false)
  }
  const show = () => {
    setShowHideAsterisk(true)
  }
  const onkeydown = () => {
    setShowHideAsterisk(false)
  }

  return (
    <>
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input
          style={customStyles}
          ref={register}
          id={id}
          onFocus={hide}
          asteriskOnInput={asteriskOnInput}
          onBlur={show}
          onKeyDown={onkeydown}
          {...inputProps}
        />
        {showHideAsterisk ? (
          <span className={styles.AsteriskInput} style={asteriskPaddingLeft}>
            *
          </span>
        ) : null}

        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    </>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  asteriskOnInput: PropTypes.bool,
  asteriskPaddingLeft: PropTypes.objectOf,
  error: PropTypes.string.isRequired,
}

FormInput.defaultProps = {
  asteriskOnInput: false,
  asteriskPaddingLeft: '',
}

export default FormInput
