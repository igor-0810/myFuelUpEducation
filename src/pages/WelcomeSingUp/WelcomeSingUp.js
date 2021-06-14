/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { OpenCloseSingUpModal } from '../../store/actions'
import closeButton from './images/close-button.svg'

import SingUp from './SingUp/SingUp'
import Welcome from './Welcome/Welcome'
import SingUpSuccess from './SingUpSuccess/SingUpSuccess'

import styles from './WelcomeSingUp.module.scss'

const WelcomeSingUp = () => {
  const dispatch = useDispatch()
  const [welcomeSingUpSuccessToggle, setWelcomeSingUpSuccessToggle] = useState({
    welcome: true,
    singUp: false,
    success: false,
  })
  const onCnahgeComponent = data => {
    setWelcomeSingUpSuccessToggle(data)
  }
  return (
    <div className={styles.WelcomeSingUp}>
      <div
        className={styles.WelcomeSingUpLeftDiv}
        onClick={() =>
          dispatch(OpenCloseSingUpModal.openCloseSingUpModal(false))
        }
      />
      <div className={styles.WelcomeSingUpRightDiv}>
        <img
          src={closeButton}
          onClick={() =>
            dispatch(OpenCloseSingUpModal.openCloseSingUpModal(false))
          }
          alt=""
          className={styles.closeButton}
        />
        {welcomeSingUpSuccessToggle.welcome ? (
          <Welcome onCnahgeComponent={onCnahgeComponent} />
        ) : null}
        {welcomeSingUpSuccessToggle.singUp ? (
          <SingUp onCnahgeComponent={onCnahgeComponent} />
        ) : null}
        {welcomeSingUpSuccessToggle.success ? <SingUpSuccess /> : null}
      </div>
    </div>
  )
}

export default WelcomeSingUp
