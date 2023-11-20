import React, { useContext } from 'react'
import MyInput from '../Components/UI/input/MyInput'
import MyBtn from '../Components/UI/button/MyBtn'
import { AuthContext } from '../context/AuthContext'
import About from '../pages/About'

const Login = () => {
    const {isAuth, setIsAuth}= useContext(AuthContext)
    const Login = (e) => { 
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
     }
    return (
    <div>
        <h1>Press log in to enter</h1>
        <form onSubmit={Login} action="">
        <MyInput placeholder={'Login (BLANK OR ANY TEXT)'}></MyInput>
        <MyInput autoComplete='user-password' type='password' placeholder={'Password (BLANK OR ANY TEXT)'}></MyInput>
        <MyBtn>Log in!</MyBtn>
        </form>
        <About></About>
    </div>
  )
}

export default Login