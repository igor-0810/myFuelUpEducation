/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import googleLogo from '../../images/search.jpg'
import facebookLogo from '../../images/facebook.jpg'
import microsofrLogo from '../../images/microsoft.jpg'
import telegramLogo from '../../images/telegram.jpg'
import whatsappLogo from '../../images/whatsapp.jpg'

import styles from './socialSingUp.module.scss'

const responseGoogle = response => {
  console.log(response)
}

const responseFacebook = response => {
  console.log(response)
}

const SocialSingUp = () => {
  return (
    <div className={styles.socialSingUp}>
      <GoogleLogin
        render={renderProps => (
          <img src={googleLogo} alt="" onClick={renderProps.onClick} />
        )}
        clientId="17827177964-ohiqq39nivt03i5dd8ls4djmm33kogh1.apps.googleusercontent.com"
        // buttonText=""
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
      <FacebookLogin
        appId="518314956273155"
        autoLoad
        callback={responseFacebook}
        render={renderProps => (
          <img src={facebookLogo} alt="" onClick={renderProps.onClick} />
        )}
      />

      <img src={microsofrLogo} alt="" />
      <img src={telegramLogo} alt="" />
      <img src={whatsappLogo} alt="" />
    </div>
  )
}

export default SocialSingUp
