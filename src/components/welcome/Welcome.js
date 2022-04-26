import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './welcome.css'

const Welcome = ({ dataUser, setDataUser }) => {
  const { email, type } = dataUser
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('staxUser'))
    setDataUser(data)
  }, [])
  return (
    <div className="container">
      <div className="welcome">
        <h1>Welcome to the app {email}, {type}</h1>
      </div>
    </div>
  )
}

Welcome.propTypes = {
  dataUser: PropTypes.object,
  setDataUser: PropTypes.func
}

export default Welcome
