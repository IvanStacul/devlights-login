import React, { useState } from 'react'
import Login from './components/login/Login'
import Welcome from './components/welcome/Welcome'

function App () {
  const [isLogged, setIsLogged] = useState(window.localStorage.getItem('isLogged'))
  const [dataUser, setDataUser] = useState({
    email: '',
    password: '',
    tipo: ''
  })

  function onSuccess () {
    setIsLogged('true')
  }

  return (
    <main>
      {isLogged === 'true' ? <Welcome dataUser={dataUser} setDataUser={setDataUser}/> : <Login onSuccess={onSuccess} setDataUser={setDataUser}/>}
    </main>
  )
}

export default App
