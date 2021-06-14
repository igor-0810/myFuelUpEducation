/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { activeTab as activeTabActionType } from '../../../../store/actions'

import longArrow from '../../images/long-arrow-alt-left-solid.svg'

import styles from './Payment.module.scss'

const PaymentFooter = () => {
  const dispatch = useDispatch()
  const amount = useSelector(state => state.yourGift)
  return (
    <div className={styles.PaymentFooter}>
      <div className={styles.PaymentFooterMain}>
        <div className={styles.PaymentFooterMainLeftBox}>
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
        <div className={styles.PaymentFooterMainRightBox}>
          <p>
            Ammount: <br /> ${' '}
            {`${amount.customAmount ? amount.customAmount : amount.amount}`}{' '}
          </p>
          <button type="submit">Donate Now!</button>
        </div>
      </div>
      <p>
        By clicking DONATE NOW! I agree to the <a href="#">Terms of Use</a> and{' '}
        <a href="#">Privacy Policy</a>. Tax receipts for one-time gifts willbe
        issued via email upon receipt ofdonation.
      </p>
    </div>
  )
}

export default PaymentFooter
