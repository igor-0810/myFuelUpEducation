import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './formInput.module.scss'

const ReactDatePicker = ({
  onChange,
  className,
  placeholderText,
  dateFormat,
  asteriskOnInput,
  asteriskPaddingLeft,
  selected,
  error,
}) => {
  const [showHideAsterisk, setShowHideAsterisk] = useState(asteriskOnInput)

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
    <div className={className}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholderText}
        dateFormat={dateFormat}
        asteriskOnInput={asteriskOnInput}
        asteriskPaddingLeft={asteriskPaddingLeft}
        onFocus={hide}
        onBlur={show}
        onKeyDown={onkeydown}
      />

      {showHideAsterisk ? (
        <span className={styles.AsteriskInput} style={asteriskPaddingLeft}>
          *
        </span>
      ) : null}
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  )
}

ReactDatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  dateFormat: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  asteriskOnInput: PropTypes.bool,
  asteriskPaddingLeft: PropTypes.objectOf,
}

ReactDatePicker.defaultProps = {
  asteriskOnInput: false,
  asteriskPaddingLeft: '',
}

export default ReactDatePicker
