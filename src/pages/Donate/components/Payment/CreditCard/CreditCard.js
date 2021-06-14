/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import FormSelect from '../../../../../components/UI/controls/Select'
import FormInput from '../../../../../components/UI/controls/FormInput'

import visa from '../../../images/visa.jpg'
import masterCard from '../../../images/master-card.svg'
import americanExpress from '../../../images/a-express.png'
import PaymentFooter from '../PaymentFooter'

import longArrow from '../../../images/long-arrow-alt-left-solid.svg'

import {
  payment as paymentActionType,
  activeTab as activeTabActionType,
} from '../../../../../store/actions'

import { years, months } from './YearsMonths'

import styles from './CreditCard.module.scss'

const schema = yup.object().shape({
  creditCardNumber: yup
    .string()
    .test('len', 'Must be exactly 16 characters', val => val.length === 16)
    .required('Credit Card Number is a required field'),
  expireMonth: yup.object().required('Expire Month is a required field'),
  expireYear: yup.object().required('Expire Year is a required field'),
  cvvCode: yup
    .string()
    .test('len', 'Must be exactly 3 characters', val => val.length === 3)
    .required('Cvv Code is a required field'),
})

const CreditCard = () => {
  const dispatch = useDispatch()
  const payment = useSelector(state => state.payment)
  const amount = useSelector(state => state.yourGift)
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
    dispatch(paymentActionType.setCreditCardValues(data))
  }
  return (
    <div className={styles.CreditCard}>
      <div className={styles.CreditCardLogo}>
        <img
          src={visa}
          alt=""
          onClick={() =>
            dispatch(paymentActionType.setMastercardVizaAmericanexpress('visa'))
          }
        />
        <img
          src={masterCard}
          style={{ backgroundColor: 'darkslategray' }}
          alt=""
          onClick={() =>
            dispatch(
              paymentActionType.setMastercardVizaAmericanexpress('masterCard'),
            )
          }
        />
        <img
          src={americanExpress}
          alt=""
          onClick={() =>
            dispatch(
              paymentActionType.setMastercardVizaAmericanexpress(
                'americanExpress',
              ),
            )
          }
        />
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.CreditCardForm}>
          <FormInput
            id="creditCardNumber"
            type="number"
            name="firstName"
            label="Credit Card Number"
            className={styles.CreditCardFormCardNumber}
            {...register('creditCardNumber')}
            error={errors.creditCardNumber}
          />
          <Controller
            name="expireMonth"
            control={control}
            render={({ field }) => (
              <FormSelect
                {...field}
                label="Expire Month"
                className={styles.CreditCardFormDivs}
                options={months}
                error={errors.expireMonth}
              />
            )}
          />
          <Controller
            name="expireYear"
            control={control}
            render={({ field }) => (
              <FormSelect
                {...field}
                // defaultValue={donorInformation.title}
                label="Expire Year"
                className={styles.CreditCardFormDivs}
                options={years}
                error={errors.expireYear}
              />
            )}
          />
          <FormInput
            id="cvvCode"
            type="number"
            name="firstName"
            label="CVV Code"
            className={styles.CreditCardFormDivs}
            {...register('cvvCode')}
            error={errors.cvvCode}
          />
        </div>
        <div className={styles.CreditCardFooter}>
          <div className={styles.CreditCardFooterMain}>
            <div className={styles.CreditCardFooterMainLeftBox}>
              <img
                src={longArrow}
                alt=""
                onClick={() => dispatch(activeTabActionType.setActiveTab(1))}
              />
              <button
                type="button"
                onClick={() => dispatch(activeTabActionType.setActiveTab(1))}>
                Back
              </button>
            </div>
            <div className={styles.CreditCardFooterMainRightBox}>
              <p>
                Ammount:
                <br />
                {`${amount.customAmount ? amount.customAmount : amount.amount}`}
              </p>
              <button type="submit">Donate Now!</button>
            </div>
          </div>
          <p>
            By clicking DONATE NOW! I agree to the
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>. Tax
            receipts for one-time gifts willbe issued via email upon receipt
            ofdonation.
          </p>
        </div>
      </form>
    </div>
  )
}

export default CreditCard
