import { useState } from 'react'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

function App() {
  const [ user, setUser ] = useState(true)

  function loggedIn() {
    setUser(!user)
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <img className='insta-logo' src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="instagram-logo" />
        </div>
        {user ? <SignIn /> : <SignUp /> }
        <footer className="footer">
          {user 
            ? <p>Don't have account <a href="#" onClick={loggedIn}>Sign up</a> </p>
            : <p>have an account <a href="#" onClick={loggedIn}>Log in</a> </p>}
        </footer>
      </div>
    </>
  )
}

export default App
