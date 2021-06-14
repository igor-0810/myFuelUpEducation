import React, { useEffect, useState } from 'react'

import NavBar from '../Landing/components/NavBar/NavBar'
import Select from './components/Select'

import cardsData from './CardsData'
import twitterLogo from './images/twiter-logo.png'
import linkedInLogo from './images/linkedIn-logo.png'

import styles from './Team.module.scss'

const roleOption = [
  { label: 'All Roles', value: 'All Roles' },
  { label: 'Business', value: 'Business' },
  { label: 'Developer', value: 'Developer' },
  { label: 'Ui desinger', value: 'Ui desinger' },
  { label: 'Volunters', value: 'Volunters' },
  { label: 'Contributor', value: 'Contributor' },
]

const Team = props => {
  const [cardsArray, setCardsArray] = useState(cardsData)
  const [recency, setRecency] = useState([])

  useEffect(() => {
    if (recency.length > 0) {
      localStorage.setItem('recency', JSON.stringify(recency))
    }
  }, [recency])

  const changeCategory = e => {
    setRecency([...recency, e])

    if (e.value === 'All Roles') {
      setCardsArray(cardsData)
    } else {
      const selectedCategory = cardsData.filter(el =>
        el.category.includes(e.value),
      )
      setCardsArray(selectedCategory)
    }
  }

  const recencyChange = e => {
    if (e.value === 'All Roles') {
      setCardsArray(cardsData)
    } else {
      const selectedCategory = cardsData.filter(el =>
        el.category.includes(e.value),
      )
      setCardsArray(selectedCategory)
    }
  }

  const inputSearch = e => {
    const selectedCategory = cardsData.filter(el =>
      el.category.toLowerCase().includes(e.target.value),
    )
    setCardsArray(selectedCategory)
  }

  return (
    <div className={styles.Team}>
      <NavBar isAuth={false} />
      <div className={styles.TeamMainContainer}>
        <div className={styles.TeamMainContainerTitle}>
          <h1>Meet our authors</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            aut nobis veniam dolore aliquam placeat modi
          </p>
        </div>
      </div>
      <div className={styles.TeamFindYourExpert}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            nobis delectus ipsum nam placeat, ullam neque adipisci consectetur
            quae quos culpa, mollitia earum, eos possimus repellendus. Aliquid
            magnam assumenda dolore. quae quos culpa, mollitia earum, eos
            possimus repellendus. Aliquid magnam assumenda dolore
          </p>
        </div>
        <h1>Find your expert</h1>
      </div>
      <div className={styles.TeamCards}>
        <div className={styles.TeamCardsSearchDiv}>
          <div className={styles.TeamCardsSearchDivSelect}>
            <Select
              options={roleOption}
              placeholder="All Roles"
              onChange={changeCategory}
            />
          </div>
          <div className={styles.TeamCardsSearchDivSelect}>
            <Select
              options={JSON.parse(localStorage.getItem('recency'))}
              placeholder="Recency"
              onChange={recencyChange}
            />
          </div>
          <div className={styles.TeamCardsSearchDivInput}>
            <input
              type="text"
              placeholder="Search authors"
              onChange={inputSearch}
            />
          </div>
        </div>
        <div className={styles.TeamCadrsContainer}>
          {cardsArray.map((el, index) => (
            <div key={el.id} className={styles.TeamCadrsContainerCard}>
              <div className={styles.TeamCadrsContainerCardInnerCard}>
                <div className={styles.TeamCadrsContainerCardImg}>
                  <img src={el.image} alt="" />
                </div>
                <div className={styles.TeamCadrsContainerCardDescription}>
                  <h4>{el.name}</h4>
                  <p>{el.category}</p>
                </div>
                <div className={styles.TeamCadrsContainerCardLogos}>
                  <img src={twitterLogo} alt="" />
                  <img src={linkedInLogo} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ViewMoreButton}>
          <button type="button">View More</button>
        </div>
      </div>
    </div>
  )
}

export default Team
