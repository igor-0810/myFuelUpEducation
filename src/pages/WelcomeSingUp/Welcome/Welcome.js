import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector'
import ReactDatePicker from '../../../components/UI/controls/DatePicker'
import FormInput from '../../../components/UI/controls/FormInput'
import FormSelect from '../../../components/UI/controls/Select'

// import 'react-datepicker/dist/react-datepicker.css'

import styles from './Welcome.module.scss'

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is a required field'),
  lastName: yup.string().required('Last Name is a required field'),
  birthDate: yup.string().required('Birth Date is a required field'),
  // role: yup.object().required('Role is a required field'),
})

const selectRole = [
  { label: 'Student', value: 'Student' },
  { label: 'Teacher', value: 'Teacher' },
  { label: 'Admin', value: 'Admin' },
]

const Welcome = props => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const onSubmit = data => {
    console.log(data)
    props.onCnahgeComponent({ welcome: false, singUp: true, success: false })
  }
  return (
    <div className={styles.Welcome}>
      <h1>Welcome</h1>
      <p>Please help us fill in yor basic information</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="firstName"
          type="text"
          placeholder="First Name"
          name="firstName"
          {...register('firstName')}
          className={styles.WelcomeFormInputs}
          asteriskOnInput
          asteriskPaddingLeft={{ left: '70px' }}
          error={errors.firstName}
        />
        <FormInput
          id="lastName"
          type="text"
          placeholder="Last Name"
          name="lastName"
          {...register('lastName')}
          className={styles.WelcomeFormInputs}
          asteriskOnInput
          asteriskPaddingLeft={{ left: '70px' }}
          error={errors.lastName}
        />
        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <ReactDatePicker
              className={styles.WelcomeDatePicker}
              placeholderText="Birth Date"
              onChange={e => field.onChange(e)}
              selected={field.value}
              dateFormat="dd/MM/yyyy"
              asteriskOnInput
              asteriskPaddingLeft={{ left: '65px' }}
              error={errors.birthDate}
            />
          )}
        />
        <div className={styles.WelcomeFormInputs}>
          <Controller
            id="userCountry"
            name="userCountry"
            control={control}
            // defaultValue={null}
            rules={{ required: true }}
            render={({ field }) => (
              <CountryDropdown {...field} defaultOptionLabel="Country" />
            )}
          />
        </div>
        <div className={styles.WelcomeFormInputs}>
          <Controller
            name="userRegion"
            control={control}
            // defaultValue={null}
            rules={{ required: true }}
            render={({ field }) => (
              <RegionDropdown
                {...field}
                country={watch('userCountry')}
                blankOptionLabel="City"
              />
            )}
          />
        </div>
        <Controller
          name="Role"
          control={control}
          render={({ field }) => (
            <FormSelect
              {...field}
              placeholder="Role"
              className={styles.WelcomeFormInputs}
              options={selectRole}
              // error={errors.role}
            />
          )}
        />

        <button type="submit" className={styles.ContinueButton}>
          Continue
        </button>
      </form>
    </div>
  )
}
Welcome.propTypes = {
  onCnahgeComponent: PropTypes.func.isRequired,
}

export default Welcome
