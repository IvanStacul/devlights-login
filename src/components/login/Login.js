import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './login.css'

/**
 * Valid data
 * Email: ivan@test.com
 * Password: ivan
 */

const Login = ({ onSuccess, setDataUser }) => {
  const [type, setType] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [user, setUser] = useState({
    email: '',
    password: '',
    type: ''
  })

  function handleClick (e) {
    e.preventDefault()
    if ([email, password, type].includes('')) {
      setError('All fields are required')
      return
    }

    if (email === 'ivan@test.com' && password === 'ivan') {
      setError('')
      window.localStorage.setItem('isLogged', true)
      window.localStorage.setItem('staxUser', JSON.stringify(user))
      onSuccess()
      setUser({ email, password, type })
      return
    }

    window.localStorage.setItem('isLogged', false)
    setError('Incorrect email or password')
  }

  function onEmailChange (event) {
    setEmail(event.target.value)
  }

  function onPasswordChange (event) {
    setPassword(event.target.value)
  }

  function onTypeChange (event) {
    setType(event.target.value)
  }

  return (
    <section>
      <div className="container">
        <div className="brand">
          <h2>Stax Food Admin Login</h2>
        </div>
        <div className="login-form">
          <p>Please fill in your unique admin login details below</p>
          {error.length > 0
            ? (
          <div className="alert alert-danger">
            {error}
          </div>)
            : null}
          <form>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select name="type" id="type" onChange={onTypeChange} value={type}>
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="professor">Professor</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email" >Email address</label>
              <input type="email" id="email" value={email} onChange={onEmailChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={onPasswordChange}/>
              <div className="forgot-password"><a href="#">forgot password?</a></div>
            </div>
            <button onClick={handleClick}>Sign</button>
          </form>
        </div>
      </div>
    </section>
  )
}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  setDataUser: PropTypes.func.isRequired
}

export default Login
