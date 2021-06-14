/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import FormInput from '../../../components/UI/controls/FormInput'
// import Button from '../../components/UI/Button/Button'
import SocialSingUp from '../components/socialSingUp/SocialSingUp'

import closeButton from '../images/close-button.svg'
import openEye from '../images/showEye.jpg'
import closeEye from '../images/hideEye.png'

import styles from './SingUp.module.scss'

const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup
    .string()
    .min(4)
    .max(15)
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const SingUp = props => {
  const dispatch = useDispatch()
  // const [successSingUp, setSuccessSingUp] = useState(true)
  const [isPasswordVisible, setPasswordVisible] = useState(true)
  const [confirmPasswordVisible, setConfirmPasswordVIsible] = useState(true)
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
    props.onCnahgeComponent({ welcome: false, singUp: false, success: true })
  }

  return (
    <div className={styles.SingUp}>
      <div className={styles.SingUpTitle}>
        <h1>Sing Up</h1>
        <p>Please register your lesson account here</p>
      </div>
      <div className={styles.SingUpForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            {...register('email')}
            className={styles.SingUpFormInputDivs}
            asteriskOnInput
            asteriskPaddingLeft={{ left: '40px' }}
            autoComplete="new-password"
            error={errors.email}
          />
          <div style={{ position: 'relative' }}>
            <FormInput
              id="password"
              type={isPasswordVisible ? 'password' : 'text'}
              placeholder="Password"
              name="password"
              {...register('password')}
              className={styles.SingUpFormInputDivs}
              asteriskOnInput
              asteriskPaddingLeft={{ left: '65px' }}
              error={errors.password}
            />
            {isPasswordVisible ? (
              <img
                src={openEye}
                onClick={() => setPasswordVisible(!isPasswordVisible)}
                className={styles.eye}
                alt=""
              />
            ) : (
              <img
                src={closeEye}
                onClick={() => setPasswordVisible(!isPasswordVisible)}
                className={styles.eye}
                alt=""
              />
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <FormInput
              id="confirmPassword"
              type={confirmPasswordVisible ? 'password' : 'text'}
              placeholder="Confirm Password"
              name="confirmPassword"
              {...register('confirmPassword')}
              className={styles.SingUpFormInputDivs}
              asteriskOnInput
              asteriskPaddingLeft={{ left: '115px' }}
              error={errors.confirmPassword}
            />
            {confirmPasswordVisible ? (
              <img
                src={openEye}
                onClick={() =>
                  setConfirmPasswordVIsible(!confirmPasswordVisible)
                }
                className={styles.eye}
                alt=""
              />
            ) : (
              <img
                src={closeEye}
                onClick={() =>
                  setConfirmPasswordVIsible(!confirmPasswordVisible)
                }
                className={styles.eye}
                alt=""
              />
            )}
          </div>

          <div className={styles.SingUpFormButton}>
            <button type="submit">Sing Up</button>
          </div>
        </form>
      </div>
      <div className={styles.SingUpOr}>
        <div />
        <p>Or</p>
        <div />
      </div>
      <SocialSingUp />
      <div className={styles.SingUpHaveAccount}>
        <span>Already have an account? </span>
        <a href="#">Sing In</a>
      </div>
    </div>
  )
}
SingUp.propTypes = {
  onCnahgeComponent: PropTypes.func.isRequired,
}

export default SingUp
