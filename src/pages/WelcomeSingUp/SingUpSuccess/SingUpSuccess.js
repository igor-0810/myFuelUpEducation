import React from 'react'

import styles from './SingUpSuccess.module.scss'

import successPic from '../images/singUpSuccess.svg'

const SingUpSuccess = () => {
  return (
    <div className={styles.SingUpSuccess}>
      <img src={successPic} alt="" />
      <h2>Sing Up</h2>
      <h2>Successful</h2>
      <p>Enjoy Learning Uninterruptedly</p>
      <button type="button">Go to Dashboard</button>
    </div>
  )
}

export default SingUpSuccess
